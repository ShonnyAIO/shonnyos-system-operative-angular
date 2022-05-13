import { Component, OnInit } from '@angular/core';
import { OcrService } from '../services/ocr.service';

export interface Imagen {
  url: string;
  buffer: string;
}

@Component({
  selector: 'app-homefile',
  templateUrl: './homefile.component.html',
  styleUrls: ['./homefile.component.scss']
})
export class HomefileComponent implements OnInit {

  listImages: Imagen[] = [];

  constructor(private osrService: OcrService) { }

  ngOnInit(): void {
    this.osrService.cbListImage.subscribe((data: any) => {
      this.listImages = data;
    });
  }

  clickImage(image: any) {
    this.osrService.cbImage.emit(image);
  }

}
