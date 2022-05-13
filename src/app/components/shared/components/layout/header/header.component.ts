import { Component, OnInit } from '@angular/core';
import { OcrService } from 'src/app/services/ocr.service';
import { Buffer } from 'buffer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentPic!: any;
  listImages: any[] = [];

  constructor(private osrService: OcrService) { }

  ngOnInit(): void {
  }

  procesar(evento: any) {
    // console.log(evento.target.files[0]);
    this.currentPic = evento.target.files[0];

    if (evento.target.files[0] && evento.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(evento.target.files[0]);
      reader.onload = (event: any) => {
        let url = event.target.result;
        let imageLoad = url.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
        let buffer = Buffer.from(imageLoad, "base64");
        this.listImages.push({ url: url, buffer: buffer });
        this.showList(this.listImages);
        this.clickImage(url);
        this.sendImage(buffer);
      }
    }
  }

  sendImage(image: any) {
    this.osrService.cbImage.emit(image);
  }

  clickImage(image: any) {
    this.osrService.cbImageOrigin.emit(image);
  }

  showList(image: any) {
    this.osrService.cbListImage.emit(image);
  }

}
