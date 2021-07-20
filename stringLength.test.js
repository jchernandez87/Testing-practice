const stringLength = require("./stringLength");

test("Get string length", () => {
  //Arrange
  const mystr = "example";
  //Act
  const myNumber = stringLength(mystr);
  //Assert
  expect(myNumber).toBeTruthy();
});
