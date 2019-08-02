import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

declare var require: any;

export interface Countries {
  country: string;
}

export interface Address {
  name: string;
  zipCode: string;
  country: string;
}

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
      name: "Russel",
      zipCode: "ABC12",
      country: "Belgium"
    }
  ];
  public addressBookObserver = new BehaviorSubject(this.addressBook);

  public static getCountries() {
    return require("../assets/data/countries.json");
  }

  public getAddressBook() {
    return this.addressBook;
  }

  public addAddressBook(address) {
    this.addressBook.push(address);
  }

  public editAddress(orAddress, editedAddress) {
    const updateAddress = this.addressBook.find(a => a === orAddress);
    const index = this.addressBook.indexOf(updateAddress);
    this.addressBook[index] = editedAddress;
  }
}
