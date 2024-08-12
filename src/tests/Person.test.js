
import Person from "../app/logic/persons/person";
const { chai } = window;

const expect = chai.expect;

export function test() {
  describe("Test Person", function () {
    const firstName = "Harry";
    const lastName =  "Potter";
    const person = new Person(firstName, lastName);

    describe("#getFirstName()", function () {
      it("should be implemented", function () {
        expect(typeof person.getFirstName).to.equal("function",
          "Person.getFirstName() is not implemented");
      });
     
      it("should return first name", function () {
        expect(person.getFirstName()).to.equal(firstName,
          "Person.getFirstName() doesn't return the first name");
      });
    });

    describe("#getLastName()", function () {
      it("should be implemented", function () {
        expect(typeof person.getLastName).to.equal("function",
          "Person.getLastName() is not implemented");
      });
     
      it("should return last name", function () {
        expect(person.getLastName()).to.equal(lastName,
          "Person.getLastName() doesn't return the last name");
      });
    });

  });
}
