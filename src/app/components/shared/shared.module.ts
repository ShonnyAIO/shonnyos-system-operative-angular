import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { MaterialModule } from '../../material/material.module';
import { SideBarComponent } from './components/layout/side-bar/side-bar.component';
import { OutPutTextComponent } from './components/layout/out-put-text/out-put-text.component';

/* FORMULARIO REACTIVO */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    OutPutTextComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    MaterialModule,
    SideBarComponent,
    OutPutTextComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: []
})
export class SharedModule { }
