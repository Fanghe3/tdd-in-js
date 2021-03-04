const base = require('../index');
//add
test('add 1 + 2 to equal 3', () => {
    expect(base.add([1,2])).toBe(3);
})

test('add 0 to any number to equal that number', () => {
    expect(base.add([0,2])).toBe(2);
})

//subtract

test('subtract 1 from 2 to equal 1', () =>{
    expect(base.subtract([1,2])).toBe(-1);
})

test('subtract "bill" - "parrot" to equal "Error"', () => {
    expect(base.subtract(['bill', 'parrot'])).toBe("Error");
})

//divide

test('divide 1 by 0 to return "Cannot Divide By Zero"', () => {
    expect(base.divide([1, 0])).toBe("Cannot Divide By Zero");
})

test('divide 1 by string "0" to return "Cannot Divide By Zero"', () => {
    expect(base.divide([1, "0"])).toBe("Cannot Divide By Zero");
})

test('divide 1 by 1 to return 1', () => {
    expect(base.divide([1,1])).toBe(1);
})

test('divide 1 by 0 by 1 to return "Cannot divide By Zero"', () => {
    expect(base.divide([1, 0, 1])).toBe("Cannot Divide By Zero");
})

test('divide 1 by null to return 1', () => {
    expect(base.divide([1, ])).toBe(1);
})

test('divide null by 1 to return "Error"', () => {
    expect(base.divide([ , 1])).toBe("Error");
})

test('divide two strings to return "Error"', () => {
    expect(base.divide(['test1','test2'])).toBe("Error");
})

//multiply
test('multiply any number by zero to return zero', () => {
    expect(base.multiple([Math.random(), 0])).toBe(0);
})

test('multiply any number by a string to return "Error"', () => {
    expect(base.multiple([Math.random(), "testStr"])).toBe("Error");
})

test('multiply two strings to return "Error"', () => {
    expect(base.multiple(["testStr1", "testStr2"])).toBe("Error");
})

test('multiply 2 by 3 to return 6', () => {
    expect(base.multiple([2,3])).toBe(6);
})

test('multiply 2 by -3 to return -6', () => {
    expect(base.multiple([2,-3])).toBe(-6);
})

test('multiply -2 by -3 to return 6', () => {
    expect(base.multiple([-2,-3])).toBe(6);
})

test('multiply empty array to return "Error"', () => {
    expect(base.multiple([])).toBe("Error");
})


//modulus
test('modulus 1 by 0 to return "Error"', () => {
    expect(base.modulus([1, 0])).toBe("Error");
})

test('modulus 1 by string "0" to return "Error"', () => {
    expect(base.modulus([1, "0"])).toBe("Error");
})

test('modulus 1 by 1 to return 0', () => {
    expect(base.modulus([1,1])).toBe(0);
})

test('modulus 1 by 0 by 1 to return "Error"', () => {
    expect(base.modulus([1, 0, 1])).toBe("Error");
})

test('modulus 1 by null to return 1', () => {
    expect(base.modulus([1, ])).toBe(1);
})

test('modulus null by 1 to return "Error"', () => {
    expect(base.modulus([ ,1])).toBe("Error");
})

test('modulus two strings to return "Error"', () => {
    expect(base.modulus(['test1','test2'])).toBe("Error");
})

//Exponential
test('Raise any number to the power of zero to return 1', () => {
    expect(base.exponential([Math.random(), 0])).toBe(1);
})

test('Raise any number by a string to return "Error"', () => {
    expect(base.exponential([Math.random(), "testStr"])).toBe("Error");
})

test('Raise a string to the power of a string to return "Error"', () => {
    expect(base.exponential(["testStr1", "testStr2"])).toBe("Error");
})

test('Raise 2 by 3 to return 8', () => {
    expect(base.exponential([2,3])).toBe(8);
})

test('Raise 2 by -3 to return 0.125', () => {
    expect(base.exponential([2,-3])).toBe(0.125);
})

test('Raise -2 by -3 to return -0.125', () => {
    expect(base.exponential([-2,-3])).toBe(-0.125);
})

test('Raise empty array to return "Error"', () => {
    expect(base.exponential([])).toBe("Error");
})

test('Raise 2 by 3 by 4 to return 4096', () => {
    expect(base.exponential([2,3,4])).toBe(4096);
})

//spy or mock
test('runs operation method at least once', () => {
    const spy = jest.spyOn(base, 'operation');
    base.add([2,3]);
    expect(spy).toHaveBeenCalled();
})

//spy without binding "this"
test('runs operation method at least once', () => {
    const spy = jest.spyOn(base, 'operation');
    base.divide([2,3]);
    expect(spy).toHaveBeenCalled();
})

/*
function greetWorld(greettingFn) {
    return greetingFn('world');
  }
  
  test('greetWorld calls the greeting function properly', () => {
    const greetImplementation = name => `Hey, ${name}!`;
    const mockFn = jest.fn(greetImplementation);
    const value = greetWorld(mockFn);
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith('world');
    expect(value).toBe('Hey, world!');
  });  */