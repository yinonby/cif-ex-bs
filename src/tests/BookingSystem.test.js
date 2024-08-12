
import BookingSystem from "../app/logic/BookingSystem";
import BookingSystemFactory from "../app/logic/BookingSystemFactory";
import { invalidCC, validCC1, validCC2 } from "./TestConstants";
const { chai } = window;

const expect = chai.expect;

export function test() {
  describe("Test BookingSystem", function () {

    describe("#addHotelReservation()", function () {
      let bookingSystem = null;

      it("should build a PaymentManager", function () {
        try {
          bookingSystem = BookingSystemFactory.buildBookingSystem();
        } catch (err) {
          console.error(err)
        }

        expect(bookingSystem instanceof BookingSystem,
          "BookingSystemFactory.buildBookingSystem() should construct a BookingSystem object").to.be.true;
      });

      it("should create a hotel reservation", function () {
        const reservationId = bookingSystem.addHotelReservation(
          "Lady", "Gaga",
          "ladygaga@gmail.com", "Ritz Paris", "2022-10-10", "2022-10-12",
          100, "EUR", validCC1);
        expect(reservationId).to.not.equal("", "addHotelReservation() should return a non-empty string");
      });

      it("should create another hotel reservation", function () {
        const reservationId = bookingSystem.addHotelReservation(
          "Justin", "Biber",
          "justinbiber@yahoo.com", "Carlton NYC", "2022-11-02", "2022-11-05",
          130, "USD", validCC2);
        expect(reservationId).to.not.equal("", "addHotelReservation() should return a non-empty string");
      });

      it("should fail due to invalid card", function () {
        expect(function() {
          bookingSystem.addHotelReservation(
            "Justin", "Biber",
            "justinbiber@yahoo.com", "Carlton NYC", "2022-11-02", "2022-11-05",
            130, "USD", invalidCC);
        }).to.throw('Error returned from Stripe!');
      });
    });

    describe("#cancelReservation()", function () {
      let bookingSystem = null;

      it("should build a PaymentManager", function () {
        try {
          bookingSystem = BookingSystemFactory.buildBookingSystem();
        } catch (err) {
          console.error(err)
        }

        expect(bookingSystem instanceof BookingSystem,
          "BookingSystemFactory.buildBookingSystem() should construct a BookingSystem object").to.be.true;
      });
      
      it("should cancel a hotel reservation", function () {
        const reservationId = bookingSystem.addHotelReservation(
          "Lady", "Gaga",
          "ladygaga@gmail.com", "Ritz Paris", "2022-10-10", "2022-10-12",
          100, "EUR", validCC1);
        expect(reservationId).to.not.equal("", "addHotelReservation() should return a non-empty string");

        bookingSystem.cancelReservation(reservationId);
      });
    });
  });
}
