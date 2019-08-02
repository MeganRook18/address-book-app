import { Component, OnInit } from "@angular/core";

import { AddressBookServiceService } from "../address-book-service.service";

@Component({
  selector: "app-edit-address",
  templateUrl: "./edit-address.component.html",
  styleUrls: ["./edit-address.component.scss"]
})
export class EditAddressComponent implements OnInit {
  constructor(public service: AddressBookServiceService) {}

  ngOnInit() {}
}
