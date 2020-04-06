describe("My fizzBuzz function", function() {

    beforeEach(function() {
        fizzbuzz = new fizzBuzz();
    });

    describe("Returns number, fizz, buzz or fizzbuzz", function() {
        it("should exist", function() {
            expect(fizzbuzz).toBeDefined();
        });
    

    it("should return Fizz when called as fizzBuzz(18)", function() {
            var result = fizzBuzz(21)
            expect(result).toBe("Fizz");
        });
        
    it("should return Buzz when called as fizzBuzz(20)", function() {
            var result = fizzBuzz(20)
            expect(result).toBe("Buzz");
        });
    
    it("should return FizzBuzz when called as fizzBuzz(30)", function() {
            var result = fizzBuzz(30)
            expect(result).toBe("FizzBuzz");
        });
    it("should return 2 when called as fizzBuzz(2)", function() {
            var result = fizzBuzz(2)
            expect(result).toBe(2);
        });
    });

});