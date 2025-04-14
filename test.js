// stringCalculator.test.js
const { test } = require('mocha');
const stringCalculator = require('./index');
const { expect } = require('chai');

describe('String Calculator', () => {
  test('returns 0 for an empty string', () => {
    expect(stringCalculator.add('')).equal(0);
  });
});
