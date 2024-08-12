
import BookingSystem from "../app/logic/BookingSystem";
import BookingSystemFactory from "../app/logic/BookingSystemFactory";
const { chai } = window;

const expect = chai.expect;

export function test() {
  describe("Test BookingSystemFactory", function () {

    describe("#buildBookingSystem()", function () {
      it("should be implemented", function () {
        expect(typeof BookingSystemFactory.buildBookingSystem).to.equal("function",
          "BookingSystemFactory.buildBookingSystem() is not implemented");
      });

      it("should build a PaymentManager", function () {
        const bookingSystem = BookingSystemFactory.buildBookingSystem();

        expect(bookingSystem instanceof BookingSystem,
          "BookingSystemFactory.buildBookingSystem() should construct a BookingSystem object").to.be.true;
      });
    });

  });
}
