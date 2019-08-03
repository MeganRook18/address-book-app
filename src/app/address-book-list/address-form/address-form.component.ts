import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import {
  AddressBookServiceService,
} from "../../address-book-service/address-book-service.service";
import {Address, Countries} from "../../shared/types.module";

@Component({
  selector: "app-address-form",
  templateUrl: "./address-form.component.html"
})
export class AddressFormComponent implements OnInit {
  @Input() address: Address;
  public countries: Countries[];
  public addressBook: Address[];
  public country;
  public editAddressFormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    zipCode: new FormControl("", [
      Validators.required,
      Validators.maxLength(5),
      Validators.pattern("[a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z0-9][a-zA-Z0-9]")
    ]),
    country: new FormControl("", [Validators.required])
  });
  // tslint:disable-next-line:variable-name
  constructor(private _service: AddressBookServiceService) {}

  ngOnInit() {
    this.countries = AddressBookServiceService.getCountries();
    this.addressBook = this._service.getAddressBook();
    this._initialiseFormValues();
  }

  public editAddress() {
    if (this.editAddressFormGroup.valid) {
      this._service.editAddress(this.address, this.formToObj());
    }
  }

  public deleteContact() {
    this._service.deleteAddress(this.address);
  }

  public hasError(controlName: string, errorName: string) {
    return this.editAddressFormGroup.controls[controlName].hasError(errorName);
  }

  private _initialiseFormValues() {
    this.editAddressFormGroup.get("name").setValue(this.address.name);
    this.editAddressFormGroup.get("zipCode").setValue(this.address.zipCode);
    const preSelectCountry = this.countries.find(
      c => c.country === this.address.country
    );
    this.editAddressFormGroup.get("country").setValue(preSelectCountry.country);
  }

  private formToObj() {
    const address: Address = {
      name: this.editAddressFormGroup.get("name").value,
      zipCode: this.editAddressFormGroup.get("zipCode").value,
      country: this.editAddressFormGroup.get("country").value
    };
    return address;
  }
}
