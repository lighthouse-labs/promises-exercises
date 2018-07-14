/* eslint-env mocha */
const assert = require('assert');
const {
  makePromiseResolveWith3,
  makePromiseRejectWithBoo,
  makePromiseWithConstructor
} = require('../answers/warmup');

describe('Promise.resolve(val)', () => {
  it('creates a resolving promise', () => {
    return makePromiseResolveWith3()
      .then((val) => {
        assert.equal(val, 3);
      });
  });
});
describe('Promise.reject(err)', () => {
  it('creates a rejecting promise', () => {
    return makePromiseRejectWithBoo()
      .then(() => {
        assert.fail('This promise should have rejected, not resolved');
      }, (err) => {
        assert.equal(err, 'Boo!');
      });
  });
});
describe('Promise constructor "new Promise((resolve, reject) => void)', () => {
  it('creates a promise that can resolve or reject', () => {
    const shouldResolve = makePromiseWithConstructor(true);
    const shouldReject = makePromiseWithConstructor(false)
      .then(() => {assert.fail('This should have rejected');},() => {});
    return Promise.all([shouldResolve, shouldReject]);
  });
  it('can be used to turn a callback method into a promise');
  it('can be combined with setTimeout to create a delayed promise');
});
