import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImageDisplayComponent } from './image-display/image-display.component';
import { FirstResultDisplayComponent } from './first-result-display/first-result-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ImageDisplayComponent,
    FirstResultDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
