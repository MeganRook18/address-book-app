import {Injectable} from "@angular/core";

declare var require: any;

export interface Countries {
  country: string;
}
@Injectable({
  providedIn: "root"
})
export class AddressBookServiceService {

  constructor() { }

  public getCountries() {
    return require("../assets/data/countries.json");
  }

}
