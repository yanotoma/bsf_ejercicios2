import { aboutRouter } from './about.router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    aboutRouter
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
