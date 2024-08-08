## Coding in Fun: Booking System Exercise

#### Instructions
- Implement the files in the order below. Each file contains one or more tasks, each task starting with the comment: __********** TASK **********__.
- To navigate to a file, click on the Explorer button on the left panel of VS Code for Web (the button with 2 rectangles), and click on the file you wish to edit.
- Make sure you commit and push your changes from time to time, so they are not lost. To commit and push, click on the Source Control button on the left panel of VS Code for Web (the one that has 3 small circles and 2 lines) - if you have uncommitted changes, this button will have a a blue circle badge indicator with a number indicating the number of files with changes.
- After each commit, you can test your changes using the testing section in the main exercise website (codinginfun.com).

###### Files that are already implemented
Before you start, go over the following files, which have already been implemented:
- src/app/logic/payments/Payable.ts
- src/app/logic/payments/PaymentMethod.ts
- src/app/logic/external-api-mocks/stripe/StripeMock.ts
- src/app/logic/external-api-mocks/stripe/StripeCreditCard.ts
- src/app/logic/persons/Customer.ts
- src/app/logic/persons/person.ts
- src/app/utils/Utils.ts

###### Files to implement
- src/app/logic/reservations/Reservation.ts
- src/app/logic/reservations/FixedDateReservation.ts
- src/app/logic/reservations/ActivityReservation.ts
- src/app/logic/reservations/FlightReservation.ts
- src/app/logic/reservations/DateRangeReservation.ts
- src/app/logic/reservations/HotelReservation.ts
- src/app/logic/products/Product.ts
- src/app/logic/products/Book.ts
- src/app/logic/orders/Order.ts
- src/app/logic/payments/external-adapters/ExternalPaymentProcessingAdapter.ts
- src/app/logic/payments/external-adapters/stripe/StripeAPI.ts
- src/app/logic/payments/payment-operations/PaymentOperationsProvider.ts
- src/app/logic/payments/payment-operations/managers/PaymentManager.ts
- src/app/logic/BookingSystem.ts
- src/app/logic/BookingSystemFactory.ts

#### Testing
Don't forget to test your changes, as you were instructed on the exercise website.