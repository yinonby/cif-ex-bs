
import Book from "../app/logic/products/Book";
const { chai } = window;

const expect = chai.expect;

export function test() {
  describe("Test Book", function () {
    const bookName = "Harry Potter";
    const bookPrice = 12;
    const currencyCode = "EUR";
    const book = new Book(bookName, bookPrice, currencyCode);

    describe("#getBookName()", function () {
      it("should be implemented", function () {
        expect(typeof book.getBookName).to.equal("function",
          "Book.getBookName() is not implemented");
      });

      it("should return book name", function () {
        expect(book.getBookName()).to.equal(bookName,
          "Book.getBookName() doesn't return the book name");
      });
    });

    describe("#getRate()", function () {
      it("should be implemented", function () {
        expect(typeof book.getRate).to.equal("function",
          "Book.getRate() is not implemented");
      });

      it("should return price", function () {
        expect(book.getRate()).to.equal(bookPrice,
          "Book.getRate() doesn't return the book price");
      });
    });

    describe("#getCurrencyCode()", function () {
      it("should be implemented", function () {
        expect(typeof book.getCurrencyCode).to.equal("function",
          "Book.getCurrencyCode() is not implemented");
      });

      it("should return currency code", function () {
        expect(book.getCurrencyCode()).to.equal(currencyCode,
          "Book.getCurrencyCode() doesn't return the currency code");
      });
    });

  });
}
