
import Customer from "../app/logic/persons/Customer";
import FlightReservation from "../app/logic/reservations/FlightReservation";
const { chai } = window;

const expect = chai.expect;

export function test() {
  describe("Test FlightReservation", function () {
    const reservationId = "fake-id";
    const customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
    const flightDate = "2030-10-10";
    const originAirportCode = "AAA";
    const destinationAirportCode = "BBB";
    const flightRate = 111;
    const currencyCode = "USD";
    const flightReservation = new FlightReservation(
      reservationId, customer, flightDate, originAirportCode,
      destinationAirportCode, flightRate, currencyCode);

    describe("#getFixedDate()", function () {
      it("should be implemented", function () {
        expect(typeof flightReservation.getFixedDate).to.equal("function",
          "FlightReservation.getFixedDate() is not implemented");
      });

      it("should return flight date", function () {
        expect(flightReservation.getFixedDate()).to.equal(flightDate,
          "FlightReservation.getFixedDate() doesn't return the flight date");
      });
    });

    describe("#getRate()", function () {
      it("should be implemented", function () {
        expect(typeof flightReservation.getRate).to.equal("function",
          "FlightReservation.getRate() is not implemented");
      });

      it("should return rate", function () {
        expect(flightReservation.getRate()).to.equal(flightRate,
          "FlightReservation.getRate() doesn't return the flight rate");
      });
    });

    describe("#getCurrencyCode()", function () {
      it("should be implemented", function () {
        expect(typeof flightReservation.getCurrencyCode).to.equal("function",
          "FlightReservation.getCurrencyCode() is not implemented");
      });

      it("should return currency code", function () {
        expect(flightReservation.getCurrencyCode()).to.equal(currencyCode,
          "FlightReservation.getCurrencyCode() doesn't return the currency code");
      });
    });

    describe("#getOriginAirportCode()", function () {
      it("should be implemented", function () {
        expect(typeof flightReservation.getOriginAirportCode).to.equal("function",
          "FlightReservation.getOriginAirportCode() is not implemented");
      });

      it("should return activity name", function () {
        expect(flightReservation.getOriginAirportCode()).to.equal(originAirportCode,
          "FlightReservation.getOriginAirportCode() doesn't return the origin airport code");
      });
    });

    describe("#getDestinationAirportCode()", function () {
      it("should be implemented", function () {
        expect(typeof flightReservation.getDestinationAirportCode).to.equal("function",
          "FlightReservation.getDestinationAirportCode() is not implemented");
      });

      it("should return activity name", function () {
        expect(flightReservation.getDestinationAirportCode()).to.equal(destinationAirportCode,
          "FlightReservation.getDestinationAirportCode() doesn't return the destination airport code");
      });
    });

    describe("#getReservationSummary()", function () {
      it("should be implemented", function () {
        expect(typeof flightReservation.getReservationSummary).to.equal("function",
          "FlightReservation.getReservationSummary() is not implemented");
      });

      const expectedSummary = "Flight from " + originAirportCode +
      " to " + destinationAirportCode +
      ", on " + flightDate;
      it("should return reservation summary", function () {
        expect(flightReservation.getReservationSummary()).to.equal(expectedSummary,
          "FlightReservation.getReservationSummary() doesn't return the correct summary");
      });
    });
  });
}
