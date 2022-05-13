import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { OcrService } from '../../../../../services/ocr.service';

@Component({
  selector: 'app-out-put-text',
  templateUrl: './out-put-text.component.html',
  styleUrls: ['./out-put-text.component.scss']
})
export class OutPutTextComponent implements OnInit, OnDestroy {

  constructor(private ocrService: OcrService) { }

  listSubscriber: Subscription[] = [];
  textOutput: any;
  copyInfo: boolean = false;

  ngOnInit(): void {
    this.listObserver();
  }

  copy(inputElement: any) {
    inputElement.select();
    document.execCommand("copy");
    inputElement.setSelectionRange(0, 0);
    this.copyInfo = true;
    setTimeout(() => {
      this.copyInfo = false;
    }, 3000);
  }

  ngOnDestroy(): void {
    this.listSubscriber.forEach(a => a.unsubscribe());
  }

  listObserver() {
    const observer1$ = this.ocrService.cbText.subscribe(({ text }: any) => {
      // console.log(text);
      this.textOutput = text;
    });
    this.listSubscriber = [observer1$];
  }

}
