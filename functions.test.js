const {
    returnTwo, 
    greeting, 
    add
} = require('./functions')


test('Testing Return 2 Function', () => {
    expect(returnTwo()).toBe(2)
  })

test('Testing Greeting Function', () => {
    let nameOne = "James"
    let nameTwo = "Jill"

    expect(greeting(nameOne)).toBe("Hello, James.")
    expect(greeting(nameTwo)).toBe("Hello, Jill.")
})

test('Testing Add Function', () => {
    
    expect(add(1, 2)).toBe(3)
    expect(add(5, 9)).toBe(14)

})