const sumOfEvenValues= require("./002")

test("sum of even numbers in fibo sequence whose values do not exceed 1",()=>{
    expect(sumOfEvenValues(1)).toBe(0)
})
test("sum of even numbers in fibo sequence whose values do not exceed 2",()=>{
    expect(sumOfEvenValues(2)).toBe(2)
})
test("sum of even numbers in fibo sequence whose values do not exceed 13",()=>{
    expect(sumOfEvenValues(13)).toBe(10)
})
test("sum of even numbers in fibo sequence whose values do not exceed four million",()=>{
    expect(sumOfEvenValues(4000000)).toBe(4613732)
})