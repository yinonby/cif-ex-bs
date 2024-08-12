
import PaymentManager from "../app/logic/payments/payment-operations/managers/PaymentManager";
import PaymentManagerFactory from "../app/logic/payments/payment-operations/managers/PaymentManagerFactory";
import Customer from "../app/logic/persons/Customer";
import Book from "../app/logic/products/Book";
import { invalidCC, validCC1 } from "./TestConstants";
const { chai } = window;

const expect = chai.expect;

export function test() {
  describe("Test PaymentManager", function () {

    describe("#makePayment()", function () {
      let paymentManager = null;

      it("should build a PaymentManager", function () {
        try {
          paymentManager = PaymentManagerFactory.buildPaymentManager();
        } catch (err) {
          console.error(err)
        }

        expect(paymentManager instanceof PaymentManager,
          "PaymentManagerFactory.buildPaymentManager() should construct a PaymentManager object").to.be.true;
      });

      it("should make a payment", function () {
        const customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
        const book = new Book("Harry Potter", 12, "EUR");
        const validCC = validCC1;
        const paymentId = paymentManager.makePayment(customer,
          book, validCC);
        expect(paymentId).to.not.equal("", "makePayment() should return a non-empty string");
      });

      it("should fail making a payment using an invalid payment method", function () {
        const customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
        const book = new Book("Harry Potter", 12, "EUR");
        const validCC = invalidCC;

        expect(function() {
          paymentManager.makePayment(customer, book, validCC);
        }).to.throw('Error returned from Stripe!');
      });
    });


    describe("#cancelPayment()", function () {
      let paymentManager = null;

      it("should build a PaymentManager", function () {
        try {
          paymentManager = PaymentManagerFactory.buildPaymentManager();
        } catch (err) {
          console.error(err)
        }

        expect(paymentManager instanceof PaymentManager,
          "PaymentManagerFactory.buildPaymentManager() should construct a PaymentManager object").to.be.true;
      });

      it("should cancel a payment", function () {
        const customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
        const payable = new Book("Harry Potter", 12, "EUR");
        const paymentMethod = validCC1;
        const paymentId = paymentManager.makePayment(customer,
          payable, paymentMethod);
        expect(paymentId).to.not.equal("", "makePayment() should return a non-empty string");

        paymentManager.cancelPayment(paymentId);
      });
    });

  });
}
