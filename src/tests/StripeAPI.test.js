
import StripeAPI from "../app/logic/payments/external-adapters/stripe/StripeAPI";
import Customer from "../app/logic/persons/Customer";
import Book from "../app/logic/products/Book";
import { invalidCC, validCC1 } from "./TestConstants";
const { chai } = window;

const expect = chai.expect;

export function test() {
  describe("Test StripeAPI", function () {

    describe("#charge()", function () {
      const stripeApi = new StripeAPI();

      it("should be implemented", function () {
        expect(typeof stripeApi.chargeCard).to.equal("function",
          "StripeApi.chargeCard() is not implemented");
      });

      it("should charge a card", function () {
        const customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
        const book = new Book("Harry Potter", 12, "EUR");
        const validCC = validCC1;
        const stripePaymentId = stripeApi.chargeCard(customer, book, validCC);
        expect(stripePaymentId).to.not.equal("",
          "StripeAPI.chargeCard() should return an external payment id");
      });

      it("should fail charging an invalid card", function () {
        const customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
        const book = new Book("Harry Potter", 12, "EUR");
        const validCC = invalidCC;

        expect(function() {
          stripeApi.chargeCard(customer, book, validCC);
        }).to.throw('Error returned from Stripe!',
          "In case card in invalid, StripeAPI.chargeCard() should throw an error with message: 'Error returned from Stripe!'");
      });
    });


    describe("#refund()", function () {
      const stripeApi = new StripeAPI();

      it("should be implemented", function () {
        expect(typeof stripeApi.refund).to.equal("function",
          "StripeAPI.refund() is not implemented");
      });

      it("should make a refund", function () {
        const customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
        const book = new Book("Harry Potter", 12, "EUR");
        const validCC = validCC1;
        const stripePaymentId = stripeApi.chargeCard(customer, book, validCC);
        expect(stripePaymentId).to.not.equal("",
          "StripeAPI.chargeCard() should return an external payment id");

        stripeApi.refund(stripePaymentId);
      });
    });

  });
}
