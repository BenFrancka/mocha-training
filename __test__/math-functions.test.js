//Test Suite: Math operations

//Test Cases:

//Addition
//Subtraction
//Multiplication
//Division

import { equal } from 'assert';

describe('Mathmatical Operations', () => {
  it('Should add two numbers and return their sum', () => {
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
