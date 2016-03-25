var myprogram = require("../src/myprogram.js")

//describe("#myprogram", function () {
  
  describe("Hello world", function() {
    it("says HELLO WORLD", function() {
      var hello = myprogram.helloWorld();
      expect(hello).toEqual("HELLO WORLD");
    });
  });

  describe("sum args", function() {
    it("iterates through the node process object and sums all integers in argv attribute", function() {
      var sum = myprogram.sumArgs(1,2,3);
      expect(sum).toEqual(6);
    });
  });
//});