const sumOfMult= require("./001")

test("sum of multiples of 3 or 5 for numbers bellow 10",()=>{
    expect(sumOfMult(10)).toBe(23)
})
test("sum of multiples of 3 or 5 for numbers bellow 1000",()=>{
    expect(sumOfMult(1000)).toBe(233168)
})