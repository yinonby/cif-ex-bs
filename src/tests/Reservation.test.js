
import Customer from "../app/logic/persons/Customer";
import SampleReservation from "./SampleReservation";
const { chai } = window;

const expect = chai.expect;

export function test() {
  describe("Test Reservation", function () {
    const reservationId = "fake-id";
    const customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
    const paymentId = "fake-payment-id";
    const sampleReservation = new SampleReservation(
      reservationId, customer);

    describe("#getReservationId()", function () {
      it("should be implemented", function () {
        expect(typeof sampleReservation.getReservationId).to.equal("function",
          "Reservation.getReservationId() is not implemented");
      });

      it("should return reservation id", function () {
        expect(sampleReservation.getReservationId()).to.equal(reservationId,
          "Reservation.getReservationId() doesn't return the reservation id");
      });
    });

    describe("#getCustomer()", function () {
      it("should be implemented", function () {
        expect(typeof sampleReservation.getCustomer).to.equal("function",
          "Reservation.getCustomer() is not implemented");
      });

      it("should return customer", function () {
        expect(sampleReservation.getCustomer()).to.equal(customer,
          "Reservation.getCustomer() doesn't return the customer");
      });
    });

    describe("#getPaymentId()", function () {
      it("should be implemented", function () {
        expect(typeof sampleReservation.getPaymentId).to.equal("function",
          "Reservation.getPaymentId() is not implemented");
      });

      it("should return payment id", function () {
        expect(sampleReservation.getPaymentId()).to.equal("",
          "Reservation.getPaymentId() doesn't return the payment id");
      });
    });

    describe("#setPaymentId()", function () {
      it("should be implemented", function () {
        expect(typeof sampleReservation.setPaymentId).to.equal("function",
          "Reservation.setPaymentId() is not implemented");
      });

      it("should set payment id", function () {
        sampleReservation.setPaymentId(paymentId);
        expect(sampleReservation.getPaymentId()).to.equal(paymentId,
          "Reservation.setPaymentId() doesn't set the payment id");
      });
    });
  });
}
