
import Customer from "../app/logic/persons/Customer";
import ActivityReservation from "../app/logic/reservations/ActivityReservation";
const { chai } = window;

const expect = chai.expect;

export function test() {
  describe("Test ActivityReservation", function () {
    const reservationId = "fake-id";
    const customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
    const activityName = "Ritz";
    const activityDate = "2030-10-10";
    const activityRate = 111;
    const currencyCode = "USD";
    const activityReservation = new ActivityReservation(
      reservationId, customer, activityName, activityDate, activityRate, currencyCode);

    describe("#getFixedDate()", function () {
      it("should be implemented", function () {
        expect(typeof activityReservation.getFixedDate).to.equal("function",
          "ActivityReservation.getFixedDate() is not implemented");
      });

      it("should return activity date", function () {
        expect(activityReservation.getFixedDate()).to.equal(activityDate,
          "ActivityReservation.getFixedDate() doesn't return the activity date");
      });
    });

    describe("#getRate()", function () {
      it("should be implemented", function () {
        expect(typeof activityReservation.getRate).to.equal("function",
          "ActivityReservation.getRate() is not implemented");
      });

      it("should return rate", function () {
        expect(activityReservation.getRate()).to.equal(activityRate,
        "ActivityReservation.getRate() doesn't return the activity rate");
      });
    });

    describe("#getCurrencyCode()", function () {
      it("should be implemented", function () {
        expect(typeof activityReservation.getCurrencyCode).to.equal("function",
          "ActivityReservation.getCurrencyCode() is not implemented");
      });

      it("should return currency code", function () {
        expect(activityReservation.getCurrencyCode()).to.equal(currencyCode,
          "ActivityReservation.getCurrencyCode() doesn't return the currency code");
      });
    });

    describe("#getActivityName()", function () {
      it("should be implemented", function () {
        expect(typeof activityReservation.getActivityName).to.equal("function",
          "ActivityReservation.getActivityName() is not implemented");
      });

      it("should return activity name", function () {
        expect(activityReservation.getActivityName()).to.equal(activityName,
          "ActivityReservation.getActivityName() doesn't return the activity name");
      });
    });

    describe("#getReservationSummary()", function () {
      it("should be implemented", function () {
        expect(typeof activityReservation.getReservationSummary).to.equal("function",
          "ActivityReservation.getReservationSummary() is not implemented");
      });

      const expectedSummary = "Activity: " + activityName +
      " on " + activityDate;
      it("should return reservation summary", function () {
        expect(activityReservation.getReservationSummary()).to.equal(expectedSummary,
          "ActivityReservation.getReservationSummary() doesn't return the correct summary");
      });
    });
  });
}
