import { TestBed } from "@angular/core/testing";

import { AddressBookServiceService } from "./address-book-service.service";

describe("AddressBookServiceService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: AddressBookServiceService = TestBed.get(
      AddressBookServiceService
    );
    expect(service).toBeTruthy();
  });
});
