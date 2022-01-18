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
});
