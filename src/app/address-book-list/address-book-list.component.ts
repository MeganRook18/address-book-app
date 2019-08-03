import { Component } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

import {
  Address,
  AddressBookServiceService
} from "../address-book-service/address-book-service.service";

@Component({
  selector: "app-address-book-list",
  templateUrl: "./address-book-list.component.html",
  styleUrls: ["./address-book-list.component.scss"],
  animations: [
    trigger("detailExpand", [
      state(
        "collapsed",
        style({ height: "0px", minHeight: "0", display: "none" })
      ),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("500ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      )
    ]),
    trigger("fade", [
      transition("void => *", [
        style({ opacity: 0 }),
        animate(1500)
      ]),
    ])
  ]
})
export class AddressBookListComponent {
  public address: Address;
  public expandedElement: Address;
  constructor(public service: AddressBookServiceService) {}
}
