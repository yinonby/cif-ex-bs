
import Order from "../app/logic/orders/Order";
import { book1_eur, book2_eur, book3_eur as book3_usd, customer1 } from "./TestConstants";
const { chai } = window;

const expect = chai.expect;

export function test() {
  describe("Test Order", function () {
    const orderId = "fake-order-id";

    describe("#constructor() - no products", function () {
      const products = [];
      it("should throw error", function () {
        expect(function() {
          new Order(orderId, customer1, products)
        }).to.throw('Must provide at least 1 product',
         "In case no products are given, constructor should throw an error with message: 'Must provide at least 1 product'");
      });
    });

    describe("#constructor() - mismatch currencies", function () {
      const products = [book1_eur, book3_usd];
      it("should throw error", function () {
        expect(function() {
          new Order(orderId, customer1, products)
        }).to.throw('All currencies must match',
          "In case some products don't have the same currency, constructor should throw an error with message: 'All currencies must match'");
      });
    });

    const products = [book1_eur, book2_eur];
    const order = new Order(orderId, customer1, products);

    describe("#getOrderId()", function () {
      it("should be implemented", function () {
        expect(typeof order.getOrderId).to.equal("function",
          "Order.getOrderId() is not implemented");
      });

      it("should return order id", function () {
        expect(order.getOrderId()).to.equal(orderId,
          "Order.getOrderId() doesn't return the order id");
      });
    });

    describe("#getCustomer()", function () {
      it("should be implemented", function () {
        expect(typeof order.getCustomer).to.equal("function",
          "Order.getCustomer() is not implemented");
      });

      it("should return customer", function () {
        expect(order.getCustomer()).to.equal(customer1,
          "Order.getCustomer() doesn't return the customer");
      });
    });

    describe("#getRate()", function () {
      it("should be implemented", function () {
        expect(typeof order.getRate).to.equal("function",
          "Order.getRate() is not implemented");
      });

      it("should return total rate", function () {
        expect(order.getRate()).to.equal(book1_eur.getRate() + book2_eur.getRate(),
          "Order.getRate() doesn't return the order total rate");
      });
    });

    describe("#getCurrencyCode()", function () {
      it("should be implemented", function () {
        expect(typeof order.getCurrencyCode).to.equal("function",
          "Order.getCurrencyCode() is not implemented");
      });

      it("should return currency code", function () {
        expect(order.getCurrencyCode()).to.equal(book1_eur.getCurrencyCode(),
          "Order.getCurrencyCode() doesn't return the currency code");
      });
    });

    describe("#getPaymentId()", function () {
      it("should be implemented", function () {
        expect(typeof order.getPaymentId).to.equal("function",
          "Order.getPaymentId() is not implemented");
      });

      it("should return payment id", function () {
        expect(order.getPaymentId()).to.equal("",
        "Order.getPaymentId() doesn't return the payment id");
      });
    });

    describe("#setPaymentId()", function () {
      it("should be implemented", function () {
        expect(typeof order.setPaymentId).to.equal("function",
          "Order.setPaymentId() is not implemented");
      });

      it("should set payment id", function () {
        const paymentId = "fake-payment-id";
        order.setPaymentId(paymentId);
        expect(order.getPaymentId()).to.equal(paymentId,
          "Order.setPaymentId() doesn't set the payment id");
      });
    });
  });
}
