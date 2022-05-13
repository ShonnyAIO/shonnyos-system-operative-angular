import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { recognize, createWorker } from 'tesseract.js';
import { OcrService } from 'src/app/services/ocr.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit, OnDestroy {

  @ViewChild('inputImage') inputImage!: ElementRef;
  @ViewChild('outputImage') ouputImage!: ElementRef;

  openSidebar = false;
  listSubscriber: any = [];
  image: any;
  imageOrigin: any;
  worker: any;
  loading: any;
  cx!: CanvasRenderingContext2D;
  loadingPercentage!: number;

  constructor(private ocrService: OcrService) { }

  ngOnInit(): void {
    this.listObserver();
  }

  ngOnDestroy(): void {
    this.listSubscriber.forEach((element: any) => {
      element.unsubscribe();
    });
  }

  toggleMenu() {
    this.openSidebar = !this.openSidebar;
  }

  listObserver() {
    const observer1$ = this.ocrService.cbImage.subscribe((src: any) => {
      // console.log(src);
      this.image = src;
      this.openSidebar = true;
      this.loadedImage();
    });

    const observer2$ = this.ocrService.cbImageOrigin.subscribe((image: any) => {
      // console.log(image);
      this.imageOrigin = image;
    })

    this.listSubscriber = [observer1$, observer2$];
  }

  /* AQUI EMPIEZA LO ESENCIAL :D */
  draw(dataIn: any) {
    dataIn.words.forEach((w: any) => {
      const bounding = w.bbox; // []
      // console.log(w);
      // console.log('Estoy por aqui', bounding);
      this.cx.strokeStyle = 'red';
      this.cx.strokeRect(bounding.x0, bounding.y0, bounding.x1 - bounding.x0, bounding.y1 - bounding.y0);
      this.cx.beginPath();
      this.cx.moveTo(w.baseline.x0, w.baseline.y0);
      this.cx.lineTo(w.baseline.x1, w.baseline.y1);
      this.cx.stroke();
    })
  }

  loadingProgress(logger: any) {
    this.loadingPercentage = logger.progress * 100;
    console.log(logger);
  }

  initSetup() {
    const canvasElement = this.ouputImage.nativeElement;
    const imageElement = this.inputImage.nativeElement;
    const { naturalWidth, naturalHeight } = imageElement;
    // console.log(naturalHeight, naturalWidth);
    this.cx = canvasElement.getContext('2d');
    this.cx.lineWidth = 5;
    this.cx.lineCap = 'square';
    this.cx.strokeStyle = 'green';
    canvasElement.width = naturalWidth;
    canvasElement.height = naturalHeight;
    this.initialization();
  }

  async initialization() {
    this.loading = true;
    // console.log('Iniciando el proceso');
    const imagenElement = this.image;
    //const imagenElement = this.inputImage.nativeElement;
    const { data } = await recognize(imagenElement, 'spa', {
      logger: (m) => this.loadingProgress(m)
    });
    this.draw(data);
    // console.log('FINALIZADO', data);
    this.ocrService.cbText.emit(data);
  }

  loadedImage() {
    // console.log('IMAGEN LISTA');
    this.initSetup();
    this.initialization();
  }

}
