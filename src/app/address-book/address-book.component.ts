import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { AddressBookServiceService } from "../address-book-service/address-book-service.service";
import { Address, Countries } from "../shared/types.module";

@Component({
  selector: "app-address-book",
  templateUrl: "./address-book.component.html",
  styleUrls: ["./address-book.component.scss"]
})
export class AddressBookComponent implements OnInit {
  public countries: Countries[];
  public addressFormGroup = new FormGroup({
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
  }

  public createNewAddress() {
    if (this.addressFormGroup.valid) {
      this._service.addAddressBook(this.formToObj());
    }
  }

  public hasError(controlName: string, errorName: string) {
    return this.addressFormGroup.controls[controlName].hasError(errorName);
  }

  private formToObj() {
    const countryObj = this.addressFormGroup.get("country").value;

    const address: Address = {
      name: this.addressFormGroup.get("name").value,
      zipCode: this.addressFormGroup.get("zipCode").value,
      country: countryObj.country
    };

    return address;
  }
}
