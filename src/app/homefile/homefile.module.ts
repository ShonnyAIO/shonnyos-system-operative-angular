import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../components/shared/shared.module';
import { HomefileRoutingModule } from './homefile-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { HomefileComponent } from './homefile.component';

@NgModule({
    declarations: [
        HomefileComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        HomefileRoutingModule,
        MaterialModule
    ]
})
export class FinanzasModule { }