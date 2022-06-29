import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NvaBarComponent } from './nva-bar/nva-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NvaBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[NvaBarComponent]
})
export class CoreModule { }
