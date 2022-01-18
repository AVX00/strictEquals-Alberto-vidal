// For autocomplete function => nmp i -D @types/jest

// | A       | B     | RESULT |                   |
// | ------- | ----- | ------ | ----------------- |
// | 1       | 1     | true   |                   |
// | NaN     | NaN   | false  | // Rule Exception |
// | 0       | -0    | true   | // Rule Exception |
// | -0      | 0     | true   | // Rule Exception |
// | 1       | "1"   | false  |                   |
// | true    | false | false  |                   |
// | false   | false | true   |                   |
// | "Water" | "oil" | false  |

function strictEquals(a, b) {
  if (Object.is(a, NaN) && Object.is(b, NaN)) {
    return false;
  } else if (
    (Object.is(a, 0) && Object.is(b, -0)) ||
    (Object.is(a, -0) && Object.is(b, 0))
  ) {
    return true;
  }
  return Object.is(a, b);
}

//Given-When-Then
describe("Given a function strictEquals(a,b)", () => {
  describe("When recibed as a paramaters 1 and 1", () => {
    test("Then it should return true", () => {
      //AAA
      //Arrange
      const numberOne = 1;
      const expectedOutput = true;
      //Act
      const result = strictEquals(numberOne, numberOne);
      //Assert
      //expect("return from the function we are testing").toBe("result you expect it to have")
      expect(result).toBe(expectedOutput);
    });
  });
  describe("When recibed as a paramaters NaN and Nan", () => {
    test("Then it should return false", () => {
      //AAA
      //Arrange
      const notANumber = NaN;
      const expectedOutput = false;
      //Act
      const result = strictEquals(notANumber, notANumber);
      //Assert
      //expect("return from the function we are testing").toBe("result you expect it to have")
      expect(result).toBe(expectedOutput);
    });
  });
  describe("When recibed as a paramaters 0 and -0", () => {
    test("Then it should return true", () => {
      //AAA
      //Arrange
      const zero = 0;
      const minusZero = -0;
      const expectedOutput = true;
      //Act
      const result = strictEquals(zero, minusZero);
      //Assert
      //expect("return from the function we are testing").toBe("result you expect it to have")
      expect(result).toBe(expectedOutput);
    });
  });
  describe("When recibed as a paramaters -0 and 0", () => {
    test("Then it should return true", () => {
      //AAA
      //Arrange
      const minusZero = -0;
      const zero = 0;
      const expectedOutput = true;
      //Act
      const result = strictEquals(minusZero, zero);
      //Assert
      //expect("return from the function we are testing").toBe("result you expect it to have")
      expect(result).toBe(expectedOutput);
    });
  });
  describe("When recibed as a paramaters 1 and '1'", () => {
    test("Then it should return true", () => {
      //AAA
      //Arrange
      const numberOne = 1;
      const stringOne = "1";
      const expectedOutput = false;
      //Act
      const result = strictEquals(numberOne, stringOne);
      //Assert
      //expect("return from the function we are testing").toBe("result you expect it to have")
      expect(result).toBe(expectedOutput);
    });
  });
  describe("When recibed as a paramaters true and false", () => {
    test("Then it should return false", () => {
      //AAA
      //Arrange
      const booleanTrue = true;
      const booleanFalse = false;
      const expectedOutput = false;
      //Act
      const result = strictEquals(booleanTrue, booleanFalse);
      //Assert
      //expect("return from the function we are testing").toBe("result you expect it to have")
      expect(result).toBe(expectedOutput);
    });
  });
  describe("When recibed as a paramaters false and true", () => {
    test("Then it should return false", () => {
      //AAA
      //Arrange
      const booleanFalse = false;
      const booleanTrue = true;
      const expectedOutput = false;
      //Act
      const result = strictEquals(booleanFalse, booleanTrue);
      //Assert
      //expect("return from the function we are testing").toBe("result you expect it to have")
      expect(result).toBe(expectedOutput);
    });
  });
  describe("When recibed as a paramaters false and false", () => {
    test("Then it should return false", () => {
      //AAA
      //Arrange
      const booleanFalse = false;
      const expectedOutput = true;
      //Act
      const result = strictEquals(booleanFalse, booleanFalse);
      //Assert
      //expect("return from the function we are testing").toBe("result you expect it to have")
      expect(result).toBe(expectedOutput);
    });
  });
  describe("When recibed as a paramaters 'water' and 'oil'", () => {
    test("Then it should return false", () => {
      //AAA
      //Arrange
      const stringWater = "water";
      const stringOil = "oil";
      const expectedOutput = false;
      //Act
      const result = strictEquals(stringWater, stringOil);
      //Assert
      //expect("return from the function we are testing").toBe("result you expect it to have")
      expect(result).toBe(expectedOutput);
    });
  });
});
