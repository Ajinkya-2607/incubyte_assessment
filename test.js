// stringCalculator.test.js
const { test } = require('mocha');
const stringCalculator = require('./index');
const { expect } = require('chai');

describe('String Calculator', () => {
  test('returns 0 for an empty string', () => {
    expect(stringCalculator.add('')).equal(0);
  });

  test('returns number for a single number string', () => {
    expect(stringCalculator.add('1')).equal(1);
  });

  test('returns sum for two numbers separated by comma', () => {
    expect(stringCalculator.add('1,2')).equal(3);
  });

  test('handles multiple numbers', () => {
    expect(stringCalculator.add('1,2,3,4')).equal(10);
  });

  test('handles new lines between numbers', () => {
    expect(stringCalculator.add('1\n2,3')).equal(6);
  });

  test('supports different delimiters', () => {
    expect(stringCalculator.add('//;\n1;2')).equal(3);
  });
});
