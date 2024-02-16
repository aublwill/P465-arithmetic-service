const {add} = require("../arithmetica")

test('2 + 3 is equal to 5', () => { 
    expect(add(2,3)).toBe(5);
 })

 test('1234 + 1234 is equal to 2468', () => {
    expect(add(1234,1234)).toBe(2468);
 })