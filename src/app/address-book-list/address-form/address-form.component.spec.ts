import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AddressFormComponent } from "./address-form.component";
import { MaterialModule } from "../../shared/material.module";
import {
  Address,
} from "../../address-book-service/address-book-service.service";

describe("AddressFormComponent", () => {
  let component: AddressFormComponent;
  let fixture: ComponentFixture<AddressFormComponent>;

  const mockAddressObj: Address = {
    name: "test",
    zipCode: "ABC12",
    country: "United Test"
  };

  const mockCountries = [{ country: "Afghanistan" }, { country: "Albania" }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressFormComponent],
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AddressFormComponent);
    component = fixture.componentInstance;
    component.countries = mockCountries;
    component.address = mockAddressObj;
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
