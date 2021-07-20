const reverseString = require("./reverseString");

test("Return a reversed string", () => {
  //Arrange
  const myStr = "example";
  //Act
  const reverseStr = reverseString(myStr);
  //Assert
  expect(reverseStr).toBe("elpmaxe");
});
