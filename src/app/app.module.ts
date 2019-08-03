import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddressBookComponent } from "./address-book/address-book.component";
import { AddressFormComponent } from "./address-book-list/address-form/address-form.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {AddressBookListComponent} from "./address-book-list/address-book-list.component";
import { MaterialModule } from "./shared/material.module";

@NgModule({
  declarations: [
    AppComponent,
    AddressBookComponent,
    AddressBookListComponent,
    AddressFormComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
