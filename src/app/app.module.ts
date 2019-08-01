import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddressBookComponent } from "./address-book/address-book.component";
import { EditAddressComponent } from "./edit-address/edit-address.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatCardModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatButtonModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AddressBookComponent,
    EditAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
