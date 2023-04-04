import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiModule } from '../shared-ui/shared-ui.module';

/* FORMULARIO REACTIVO */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClockComponent } from './components/clock/clock.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';

import { DialogService, DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';


@NgModule({
  declarations: [
    ClockComponent,
    ContextMenuComponent
  ],
  imports: [
    CommonModule,
    SharedUiModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    SharedUiModule,
    ClockComponent,
    ReactiveFormsModule,
    ContextMenuComponent,
    FormsModule
  ],
  providers: [
    DialogService,
    DynamicDialogRef,
    DynamicDialogConfig
  ]
})
export class SharedModule { }
