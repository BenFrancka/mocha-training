//Test Suite: Math operations

//Test Cases:

//Addition
//Subtraction
//Multiplication
//Division

const { equal } = require('assert');

describe('Mathmatical Operations', () => {
  //? use this.timeout(<somemilliseconds>) to execute a timeout on the describe block level.
  //! if your timeout is shorter than the amount of time it takes for your tests to run, the tests will fail. You can check this by adding (done) parameter to callback function in a test block.
  //* use it.only to only run one test case. Can add this to multiople cases to run a selection.
  //* use it.skip to skip the running of a particular test or set of tests. These will be displayed in  your terminal as pending. 
  //! a test block without a callback function will still run but will show as pending as well.

  it('Should add two numbers and return their sum', () => {
    //*can add a test level timeout within a test block.
    const a = 10;
    const b = 10;
    const actual = a + b;

    equal(actual, 20);
  });

  it('Should subtract two numbers and return their remainder', () => {
    const a = 10;
    const b = 10;
    const actual = a - b;

    equal(actual, 0);
  });

  it('Should multiply two numbers and return their result', () => {
    const a = 10;
    const b = 10;
    const actual = a * b;

    equal(actual, 100);
  });

  it('Should divide two numbers and return their remainder', () => {
    const a = 10;
    const b = 10;
    const actual = a / b;

    equal(actual, 1);
  });
});
