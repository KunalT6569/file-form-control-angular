import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FileFormControlModule } from 'dist/file-form-control';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FileFormControlModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
