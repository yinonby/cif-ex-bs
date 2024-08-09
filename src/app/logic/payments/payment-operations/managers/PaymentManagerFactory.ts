
export default class PaymentManagerFactory {
  // ********** TASK **********
  /*
    implement a public static method 'buildPaymentManager()' with no arguments
    and a return-type 'PaymentManager'
    - the method creates a new object 'stripeApi' whose type is 'StripeAPI'
    - the method creates an array whose type is
      'ExternalPaymentProcessingAdapter[]', and initializes it with a single
      item - 'stripeApi'
    - the method returns a new 'PaymentManager', initialized with 'stripeApi',
      and the array
  */

  /*
    Note: if we want to change the external payment provider (i.e. Stripe),
    all we have to do is to add a new external payment adapter and assign it
    to the ExternalPaymentProcessingAdapter (while the array must still have the
    old 'stripeApi', for backward compaibility in case of a request for a
    refund whose payment was made on the previous external payment providers).
    
    For example:

    - We create a 'PaymentManager' object, with Stripe as external payment
      processing service as follows:

      const stripeApi: StripeAPI = new StripeAPI();
      const primaryExternalPaymentProcessingAdapter: ExternalPaymentProcessingAdapter =
        stripeApi;
      const externalPaymentProcessingAdapters: ExternalPaymentProcessingAdapter[] =
        [stripeApi];

      return new PaymentManager(primaryExternalPaymentProcessingAdapter,
        externalPaymentProcessingAdapters);

    - A customer makes a payment. The 'PaymentManager' object records the
      paymentId and store the external payment processing service
      name ('Stripe).

    - We change the primary external payment processing service to 'Visa'.
      Here we still keep a 'StripeAPI' object in the
      'externalPaymentProcessingAdapters' array, for backward compatibility.

      const stripeApi: StripeAPI = new StripeAPI();
      const visaApi: StripeAPI = new VisaAPI();
      const primaryExternalPaymentProcessingAdapter: ExternalPaymentProcessingAdapter =
        visaApi;
      const externalPaymentProcessingAdapters: ExternalPaymentProcessingAdapter[] =
        [stripeApi, visaApi];

      return new PaymentManager(primaryExternalPaymentProcessingAdapter,
        externalPaymentProcessingAdapters);

    - The customer makes a refund. The 'PaymentManager' object will locate
      the payment, and identify that it was made using 'Stripe'.
      It will then locate the 'StripeAPI' object in the
      'externalPaymentProcessingAdapters' array, and use it as the
      external payment processing adapter.
  */
}
