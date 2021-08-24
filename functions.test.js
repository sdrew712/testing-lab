const { TestWatcher } = require("jest")
const { returnTwo, greeting, add, subtract, multiply, divide } = require("./functions")

test("Should return the number 2", () => {
  expect(returnTwo()).toBe(2)
})

test("Should return hello {name}", () => {
  expect(greeting('James')).toBe('Hello, James')

  expect(greeting('Jill')).toBe('Hello, Jill')
})

describe("math functions", () => {
  test("Should add 2 numbers", () => {
    expect(add(1, 2)).toBe(3)
  
    expect(add(5, 9)).toBe(14)

    expect(typeof add(2,7)).toBe("number")

    expect(add(6, 9)).toBeDefined()

    expect(add(2.4, 1.2)).toBeCloseTo(3.7, -2)
  })
  
  test("Should subtract 2 numbers", () => {
    expect(subtract(5, 3)).toBe(2)
  
    expect(subtract(10, 7)).toBe(3)

    expect(typeof subtract(2,7)).toBe("number")

    expect(subtract(20, 5)).toBeLessThan(17)
  })
  
  test("Should multiply 2 numbers", () => {
    expect(multiply(1, 2)).toBe(2)
  
    expect(multiply(3, 5)).toBe(15)

    expect(typeof multiply(2,7)).toBe("number")
  })
  
  test("Should divide 2 numbers", () => {
    expect(divide(4, 2)).toBe(2)
  
    expect(divide(15, 3)).toBe(5)

    expect(typeof divide(2,7)).toBe("number")

    expect(typeof add("a", "v")).toBe("number")
  })
})
