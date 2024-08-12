
import Customer from "../app/logic/persons/Customer";
import HotelReservation from "../app/logic/reservations/HotelReservation";
const { chai } = window;

const expect = chai.expect;

export function test() {
  describe("Test HotelReservation", function () {
    const reservationId = "fake-id";
    const customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
    const startDate = "2030-10-10";
    const endDate = "2030-10-13";
    const rate = 111;
    const currencyCode = "USD";
    const hotelName = "Ritz";
    const hotelReservation = new HotelReservation(
      reservationId, customer, startDate, endDate, rate, currencyCode,
      hotelName);

    describe("#getRate()", function () {
      it("should be implemented", function () {
        expect(typeof hotelReservation.getRate).to.equal("function",
          "HotelReservation.getRate() is not implemented");
      });

      it("should return rate", function () {
        expect(hotelReservation.getRate()).to.equal(rate);
      });
    });

    describe("#getCurrencyCode()", function () {
      it("should be implemented", function () {
        expect(typeof hotelReservation.getCurrencyCode).to.equal("function",
          "HotelReservation.getCurrencyCode() is not implemented");
      });

      it("should return currency code", function () {
        expect(hotelReservation.getCurrencyCode()).to.equal(currencyCode);
      });
    });

    describe("#getStartDate()", function () {
      it("should be implemented", function () {
        expect(typeof hotelReservation.getStartDate).to.equal("function",
          "HotelReservation.getStartDate() is not implemented");
      });

      it("should return start date", function () {
        expect(hotelReservation.getStartDate()).to.equal(startDate);
      });
    });

    describe("#getEndDate()", function () {
      it("should be implemented", function () {
        expect(typeof hotelReservation.getEndDate).to.equal("function",
          "HotelReservation.getEndDate() is not implemented");
      });

      it("should return end date", function () {
        expect(hotelReservation.getEndDate()).to.equal(endDate);
      });
    });

    describe("#getHotelName()", function () {
      it("should be implemented", function () {
        expect(typeof hotelReservation.getHotelName).to.equal("function",
          "HotelReservation.getHotelName() is not implemented");
      });

      it("should return hotel name", function () {
        expect(hotelReservation.getHotelName()).to.equal(hotelName);
      });
    });

    describe("#getReservationSummary()", function () {
      it("should be implemented", function () {
        expect(typeof hotelReservation.getReservationSummary).to.equal("function",
          "HotelReservation.getReservationSummary() is not implemented");
      });

      const expectedSummary = "Hotel: " + hotelName +
        ", check-in: " + startDate +
        ", check-out: " + endDate;
      it("should return reservation summary", function () {
        expect(hotelReservation.getReservationSummary()).to.equal(expectedSummary);
      });
    });
  });
}
