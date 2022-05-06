import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubmitbuttonComponent } from './components/submitbutton/submitbutton.component';
import { SearchfieldComponent } from './components/searchfield/searchfield.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomInputComponent } from './components/custom-input/custom-input.component';

@NgModule({
  declarations: [AppComponent, SubmitbuttonComponent, SearchfieldComponent, CustomInputComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
