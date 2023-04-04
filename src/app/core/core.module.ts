import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BootComponent } from './boot/boot.component';
import { LoginComponent } from './login/login.component';
import { MachineControlsComponent } from './machine-controls/machine-controls.component';

@NgModule({
  declarations: [
    BootComponent,
    LoginComponent,
    MachineControlsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoreModule { }
