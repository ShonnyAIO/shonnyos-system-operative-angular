import { Component, OnInit, Input } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dialog-controls',
  templateUrl: './dialog-controls.component.html',
  styleUrls: ['./dialog-controls.component.scss']
})
export class DialogControlsComponent implements OnInit {

  @Input('command') set setCommand(command: any) {
    if (command == 'exit') this.close();
  }

  maximized = false;
  initialWidth?: string;
  initialHeight?: string;

  constructor(private dialogRef: DynamicDialogRef,
    private dialogConfig: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.initialHeight = this.dialogConfig.height;
    this.initialWidth = this.dialogConfig.width;
  }

  close() {
    this.dialogRef.close();
  }

  maximize() {
    this.maximized = !this.maximized;
    this.dialogConfig.width = this.maximized ? '100%' : this.initialWidth;
    this.dialogConfig.height = this.maximized ? '100%' : this.initialHeight;
  }

}
