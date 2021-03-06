import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import {Address} from "../shared/types.module";

declare var require: any;

@Injectable({
  providedIn: "root"
})
export class AddressBookServiceService {
  public addressBook: Address[] = [
    {
      name: "Megan Rook",
      zipCode: "ABC12",
      country: "Albania"
    },
    {
      name: "Sammy",
      zipCode: "ABC12",
      country: "Antarctica"
    },
    {
      name: "Apple",
      zipCode: "ABC12",
      country: "Belgium"
    }
  ];
  public addressBookObserver = new BehaviorSubject(this.addressBook);

  public static getCountries() {
    return require("../../assets/data/countries.json");
  }

  public getAddressBook() {
    return this.addressBook;
  }

  public addAddressBook(address) {
    this.addressBook.push(address);
  }

  public deleteAddress(address) {
    this.addressBook.splice(this.findAddressInBookAndReturnIndex(address), 1);
  }

  public editAddress(originalAddress, editedAddress) {
    this.addressBook[
      this.findAddressInBookAndReturnIndex(originalAddress)
    ] = editedAddress;
  }

  private findAddressInBookAndReturnIndex(addressToBeLocated) {
    const updateAddress = this.addressBook.find(a => a === addressToBeLocated);
    return this.addressBook.indexOf(updateAddress);
  }
}
