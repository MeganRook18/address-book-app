import { Injectable } from "@angular/core";
import {BehaviorSubject, Observable} from 'rxjs';

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
      country: "UK"
    },
    {
      name: "Sammy",
      zipCode: "ABC12",
      country: "Australia"
    },
    {
      name: "Russel",
      zipCode: "ABC12",
      country: "New Zealand"
    }
  ];
  public addressBookObserver = new BehaviorSubject(this.addressBook);

  public static getCountries() {
    return require("../assets/data/countries.json");
  }

  public addAddressBook(address) {
    this.addressBook.push(address);
  }

  public getAddress(): Observable<Address[]> {
    return this.addressBookObserver;
  }
}
