
import PaymentManager from "../app/logic/payments/payment-operations/managers/PaymentManager";
import PaymentManagerFactory from "../app/logic/payments/payment-operations/managers/PaymentManagerFactory";
const { chai } = window;

const expect = chai.expect;

export function test() {
  describe("Test PaymentManagerFactory", function () {

    describe("#buildPaymentManager()", function () {
      it("should be implemented", function () {
        expect(typeof PaymentManagerFactory.buildPaymentManager).to.equal("function",
          "PaymentManagerFactory.buildPaymentManager() is not implemented");
      });

      it("should build a PaymentManager", function () {
        const paymentManager = PaymentManagerFactory.buildPaymentManager();

        expect(paymentManager instanceof PaymentManager,
          "PaymentManagerFactory.buildPaymentManager() doesn't return PaymentManager object").to.be.true;
      });
    });

  });
}
