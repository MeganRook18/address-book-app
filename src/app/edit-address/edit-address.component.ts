import { Component, OnInit } from "@angular/core";

import {Address, AddressBookServiceService} from "../address-book-service.service";

@Component({
  selector: "app-edit-address",
  templateUrl: "./edit-address.component.html",
  styleUrls: ["./edit-address.component.scss"],
  animations: []
})
export class EditAddressComponent implements OnInit {
  public address: Address;
  public expanded: boolean;
  constructor(public service: AddressBookServiceService) {}

  ngOnInit() {}

  public showDetails(address) {
    this.expanded = !this.expanded;
    this.address = address;
  }
}
