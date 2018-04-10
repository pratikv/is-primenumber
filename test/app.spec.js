var expect = require("expect");
var isPrime = require("../index");



describe("tests prime", ()=>{

    it("should return 'false' if number == 0", ()=>{
        let x = 0;
        expect(isPrime(x)).toBeFalsy();
    });

    it("should return 'false' if number == 1", ()=>{
        let x = 1;
        expect(isPrime(x)).toBeFalsy();
    });


    it("should return 'true' if number == 2", ()=>{
        let x =2;
        expect(isPrime(x)).toBeTruthy();
    });

    it("should return 'true' if the number is prime", ()=>{
        let x = 611057;
        expect(isPrime(x)).toBeTruthy();
    });

    it("should return 'false' if number == 25", ()=>{
        let x = 25;
        expect(isPrime(x)).toBeFalsy();
    });

    it("should throw if the value is not a number", () => {
        let x = "Hello World!";
        expect(isPrime.bind(isPrime, x)).toThrow("Not a number");
    });
});