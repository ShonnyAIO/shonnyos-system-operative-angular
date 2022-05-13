import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomefileComponent } from './homefile.component';

const routes: Routes = [
    {
        path: '',
        component: HomefileComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomefileRoutingModule { }
