import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AddressBookListComponent } from "./address-book-list.component";
import { MaterialModule } from "../shared/material.module";
import { AddressBookServiceService } from "../address-book-service/address-book-service.service";
import { AddressFormComponent } from "./address-form/address-form.component";

describe("AddressBookListComponent", () => {
  let component: AddressBookListComponent;
  let fixture: ComponentFixture<AddressBookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressBookListComponent, AddressFormComponent],
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers: [AddressBookServiceService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render addresses in table", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".table")).not.toBeNull();
  });
});
