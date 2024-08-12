
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
      try {
        paymentManager = PaymentManagerFactory.buildPaymentManager();
      } catch (err) {}

      it("should be implemented", function () {
        expect(typeof paymentManager.makePayment).to.equal("function",
          "PaymentManager.makePayment() is not implemented");
      });

      it("should make a payment", function () {
        const customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
        const book = new Book("Harry Potter", 12, "EUR");
        const validCC = validCC1;
        const paymentId = paymentManager.makePayment(customer,
          book, validCC);
        expect(paymentId).to.not.equal("",
          "PaymentManager.makePayment() doesn't return a payment id");
      });

      it("should fail making a payment using an invalid payment method", function () {
        const customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
        const book = new Book("Harry Potter", 12, "EUR");
        const validCC = invalidCC;

        expect(function() {
          paymentManager.makePayment(customer, book, validCC);
        }).to.throw('Error returned from Stripe!',
          "In case payment method is invalid, PaymentManager.makePayment() should throw an error with message: 'Error returned from Stripe!'");
      });
    });


    describe("#cancelPayment()", function () {
      let paymentManager = null;
      try {
        paymentManager = PaymentManagerFactory.buildPaymentManager();
      } catch (err) {}

      it("should be implemented", function () {
        expect(typeof paymentManager.cancelPayment).to.equal("function",
          "PaymentManager.cancelPayment() is not implemented");
      });
     
      it("should cancel a payment", function () {
        const customer = new Customer("Lady", "Gaga", "ladygaga@gmail.com");
        const payable = new Book("Harry Potter", 12, "EUR");
        const paymentMethod = validCC1;
        const paymentId = paymentManager.makePayment(customer,
          payable, paymentMethod);
        expect(paymentId).to.not.equal("",
          "makePayment() should return a payment id");

        paymentManager.cancelPayment(paymentId);
      });
    });

  });
}
