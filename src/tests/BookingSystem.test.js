
import BookingSystemFactory from "../app/logic/BookingSystemFactory";
import { invalidCC, validCC1, validCC2 } from "./TestConstants";
const { chai } = window;

const expect = chai.expect;

export function test() {
  describe("Test BookingSystem", function () {

    describe("#addHotelReservation()", function () {
      let bookingSystem = null;
      try {
        bookingSystem = BookingSystemFactory.buildBookingSystem();
      } catch (err) {}

      it("should be implemented", function () {
        expect(typeof bookingSystem.addHotelReservation).to.equal("function",
          "BookingSystem.addHotelReservation() is not implemented");
      });

      it("should create a hotel reservation", function () {
        const reservationId = bookingSystem.addHotelReservation(
          "Lady", "Gaga",
          "ladygaga@gmail.com", "Ritz Paris", "2022-10-10", "2022-10-12",
          100, "EUR", validCC1);
        expect(reservationId).to.not.equal("",
          "addHotelReservation() doesn't return a reservation id");
      });

      it("should create another hotel reservation", function () {
        const reservationId = bookingSystem.addHotelReservation(
          "Justin", "Biber",
          "justinbiber@yahoo.com", "Carlton NYC", "2022-11-02", "2022-11-05",
          130, "USD", validCC2);
        expect(reservationId).to.not.equal("",
          "addHotelReservation() doesn't return a reservation id");
      });

      it("should fail due to invalid card", function () {
        expect(function() {
          bookingSystem.addHotelReservation(
            "Justin", "Biber",
            "justinbiber@yahoo.com", "Carlton NYC", "2022-11-02", "2022-11-05",
            130, "USD", invalidCC);
        }).to.throw('Error returned from Stripe!',
          "addHotelReservation() should throw an error with message: 'Error returned from Stripe!'");
      });
    });

    describe("#cancelReservation()", function () {
      let bookingSystem = null;
      try {
        bookingSystem = BookingSystemFactory.buildBookingSystem();
      } catch (err) {}

      it("should be implemented", function () {
        expect(typeof bookingSystem.cancelReservation).to.equal("function",
          "BookingSystem.cancelReservation() is not implemented");
      });
      
      it("should cancel a hotel reservation", function () {
        const reservationId = bookingSystem.addHotelReservation(
          "Lady", "Gaga",
          "ladygaga@gmail.com", "Ritz Paris", "2022-10-10", "2022-10-12",
          100, "EUR", validCC1);
        expect(reservationId).to.not.equal("",
          "addHotelReservation() doesn't return a reservation id");

        bookingSystem.cancelReservation(reservationId);
      });
    });
  });
}
