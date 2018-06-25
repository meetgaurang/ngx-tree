import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxTreeComponent } from './ngx-tree/ngx-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxTreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
