import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxTreeModuleModule } from './ngx-tree-module/ngx-tree-module.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxTreeModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
