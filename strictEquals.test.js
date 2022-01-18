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
      const a = 1;
      const b = 1;
      const expectedOutput = true;
      //Act
      const result = strictEquals(a, b);
      //Assert
      //expect("return from the function we are testing").toBe("result you expect it to have")
      expect(result).toBe(expectedOutput);
    });
  });
  describe("When recibed as a paramaters NaN and Nan", () => {
    test("Then it should return false", () => {
      //AAA
      //Arrange
      const a = NaN;
      const b = NaN;
      const expectedOutput = false;
      //Act
      const result = strictEquals(a, b);
      //Assert
      //expect("return from the function we are testing").toBe("result you expect it to have")
      expect(result).toBe(expectedOutput);
    });
  });
  describe("When recibed as a paramaters 0 and -0", () => {
    test("Then it should return true", () => {
      //AAA
      //Arrange
      const a = 0;
      const b = -0;
      const expectedOutput = true;
      //Act
      const result = strictEquals(a, b);
      //Assert
      //expect("return from the function we are testing").toBe("result you expect it to have")
      expect(result).toBe(expectedOutput);
    });
  });
  describe("When recibed as a paramaters -0 and 0", () => {
    test("Then it should return true", () => {
      //AAA
      //Arrange
      const a = -0;
      const b = 0;
      const expectedOutput = true;
      //Act
      const result = strictEquals(a, b);
      //Assert
      //expect("return from the function we are testing").toBe("result you expect it to have")
      expect(result).toBe(expectedOutput);
    });
  });
  describe("When recibed as a paramaters 1 and '1'", () => {
    test("Then it should return true", () => {
      //AAA
      //Arrange
      const a = 1;
      const b = "1";
      const expectedOutput = false;
      //Act
      const result = strictEquals(a, b);
      //Assert
      //expect("return from the function we are testing").toBe("result you expect it to have")
      expect(result).toBe(expectedOutput);
    });
  });
  describe("When recibed as a paramaters true and false", () => {
    test("Then it should return false", () => {
      //AAA
      //Arrange
      const a = true;
      const b = false;
      const expectedOutput = false;
      //Act
      const result = strictEquals(a, b);
      //Assert
      //expect("return from the function we are testing").toBe("result you expect it to have")
      expect(result).toBe(expectedOutput);
    });
  });
  describe("When recibed as a paramaters false and true", () => {
    test("Then it should return false", () => {
      //AAA
      //Arrange
      const a = false;
      const b = true;
      const expectedOutput = false;
      //Act
      const result = strictEquals(a, b);
      //Assert
      //expect("return from the function we are testing").toBe("result you expect it to have")
      expect(result).toBe(expectedOutput);
    });
  });
});
