import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NvaBarComponent } from './nva-bar/nva-bar.component';



@NgModule({
  declarations: [NvaBarComponent],
  imports: [
    CommonModule
  ],
  exports:[NvaBarComponent]
})
export class CoreModule { }
