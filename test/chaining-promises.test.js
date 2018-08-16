/* eslint-env mocha */

const assert = require('assert');
const {flatMapPromise} = require('../answers/chaining-promises.js');

describe('Chaining Promises with .then(cb) and .catch(cb)', () => {
  describe('#flatMapPromise(promise, asyncTransformer) => Promise', () => {
    context('If the first promise resolves', () => {
      const firstPromise = Promise.resolve(3);
      it('resolves with the value of the second promise', () => {
        const resolveAndSquare = (val) => Promise.resolve(val * val);
        return flatMapPromise(firstPromise, resolveAndSquare)
          .then((val) => {
            assert.equal(val, 9);
          });
      });
      it('rejects with the error of the second promise', () => {
        const freakOut = (val) => Promise.reject(`Boo! ${val}`);
        return flatMapPromise(firstPromise, freakOut)
          .then((val) => {
            assert.fail(`This should not have resolved!  It resolved with ${val}`);
          }, (err) => {
            assert.equal(err, 'Boo! 3');
          });
      });  
    });
    context('If the first promise rejects', () => {
      it('rejects with the error of the first promise', () => {
        return flatMapPromise(Promise.reject('Boo!'), (val) => Promise.reject(val))
          .then((val) => {
            assert.fail(`This should not have resolved!  It resolved with ${val}`);
          }, (err) => {
            assert.equal(err, 'Boo!');
          });
      });
    });
  });
});