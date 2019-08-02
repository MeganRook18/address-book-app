import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {MatCardModule, MatError, MatLabel} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

import { AddressBookComponent } from "./address-book.component";
import { AddressBookServiceService } from "../address-book-service.service";

fdescribe("AddressBookComponent", () => {
  let component: AddressBookComponent;
  let fixture: ComponentFixture<AddressBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressBookComponent],
      imports: [
        MatCardModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers: [AddressBookServiceService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
