/* eslint-env mocha */
const assert = require('assert');
const {
  makePromiseResolveWith3,
  makePromiseRejectWithBoo,
  makePromiseWithConstructor,
  makeDelayPromise,
  makePromiseFromFunctionWithCallback,
} = require('../answers/warmup');
describe('Promise.resolve: (val:T) => Promise<T>', () => {
  describe('#makePromiseResolveWith3:() => Promise<number>', () => {
    it('creates a resolving promise', () => {
      return makePromiseResolveWith3()
        .then((val) => {
          assert.equal(val, 3);
        });
    });
  });
});

describe('Promise.reject: (err:T) => Promise<,T>', () => {
  describe('#makePromiseRejectWithBoo:() => Promise<,string>', () => {
    it('creates a rejecting promise', () => {
      return makePromiseRejectWithBoo()
        .then(() => {
          assert.fail('This promise should have rejected, not resolved');
        }, (err) => {
          assert.equal(err, 'Boo!');
        });
    });
  });
});
describe('Promise constructor "new Promise((resolve, reject) => void) => Promise', () => {
  describe('#makePromiseWithConstructor: (boolean) => Promise<undefined,undefined>', () => {
    it('creates a promise that will resolve', () => {
      return makePromiseWithConstructor(true);
    });
    it('creates a promise that will reject', () => {
      return makePromiseWithConstructor(false)
        .then(() => {
          assert.fail('This should have failed.');
        }, () => {});
    });
  });
  describe('#makeDelayPromise: (A, number) => Promise<A>', () =>{
    it('returns a promise that resolves with the value', () => {
      const start = new Date();
      return makeDelayPromise('Hello', 0)
        .then((val) => {
          assert.equal(val, 'Hello');
          assert((new Date() - start) < 50, 'Took too long');
        });
    });
    it('returns a promise that resolves after a delay', () => {
      const start = new Date();
      return makeDelayPromise('World', 1000)
        .then((val) => {
          assert.equal(val, 'World');
          const diff = new Date() - start;
          assert(diff >= 1000, 'Happened too early');
          assert(diff < 1050, 'Took too long');
        });
    });
  });
  describe('#makePromiseFromFunctionWithCallback:(fn:([...params,] cb: (err:E, val:T) => void)) => void)=>([...params]) => Promise<T,E>', () => {
    it('turns a resolving callback function into a resolving promise', () => {
      function resolver(cb){
        cb(null, 'Hello');
      }
      return makePromiseFromFunctionWithCallback(resolver)
        .then(val => {
          assert.equal(val, 'Hello');
        });
    });
    it('turns a rejecting callback function into a rejecting promise', () => {
      function rejector(cb){
        cb('Boo!');
      }
      return makePromiseFromFunctionWithCallback(rejector)
        .then(() => {
          assert.fail('This should have rejected');
        }, (err) => {
          assert.equal(err, 'Boo!');
        });
    });

    it('takes params in the returning function', () => {
      function delayedResolver(firstVal, secondVal, cb){
        setTimeout(() => {
          cb(null, firstVal + ' ' + secondVal);
        }, 500);
      }

      return makePromiseFromFunctionWithCallback(delayedResolver, 'Hello', 'World')
        .then((val) => {
          assert.equal(val, 'Hello World');
        });
    });
  });
});
