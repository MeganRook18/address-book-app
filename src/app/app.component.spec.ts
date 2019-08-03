import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import {RouterTestingModule} from "@angular/router/testing";

import {AddressBookComponent} from "./address-book/address-book.component";
import {AddressBookListComponent} from "./address-book-list/address-book-list.component";
import {MaterialModule} from "./shared/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AddressFormComponent} from "./address-book-list/address-form/address-form.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        AppComponent,
        AddressBookComponent,
        AddressBookListComponent,
        AddressFormComponent
      ],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
