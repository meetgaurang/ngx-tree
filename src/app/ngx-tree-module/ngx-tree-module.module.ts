import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTreeComponent } from './ngx-tree/ngx-tree.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxTreeComponent
  ],
  exports: [
    NgxTreeComponent
  ]
})
export class NgxTreeModuleModule { }
