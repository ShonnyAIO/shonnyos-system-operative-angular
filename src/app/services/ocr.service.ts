import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OcrService {

  cbImage: EventEmitter<any> = new EventEmitter<any>();
  cbImageOrigin: EventEmitter<any> = new EventEmitter<any>();
  cbText: EventEmitter<any> = new EventEmitter<any>();
  cbListImage: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

  constructor() { }
}
