import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { RegisterComponent } from './componenet/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
   ReactiveFormsModule,
   BrowserAnimationsModule,
   MatDialogModule,
   BrowserAnimationsModule, // Import BrowserAnimationsModule for animations
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
