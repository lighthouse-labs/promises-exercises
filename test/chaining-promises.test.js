/* eslint-env mocha */

const assert = require('assert');
const {flatMapPromise, chainTwoAsyncProcesses} = require('../answers/chaining-promises.js');

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
  
  describe('#chainTwoAsyncProcesses(firstPromise, slowAsyncProcess)', () => {
    it('runs a slow process on the result of the numberPromise', () => {
      const time = new Date();
      const numberPromise = Promise.resolve(31);

      function slowSquarer(num){
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(num * num);
          }, 1000);
        });
      }

      return chainTwoAsyncProcesses(numberPromise, slowSquarer)
        .then((val) => {

          assert.equal(val, 961);

          const timeElapsed = new Date() - time;

          assert(timeElapsed >= 975, 'Process too quick.  Are you sure that you chained the two processes?');

          assert(timeElapsed <= 1025, 'Process too slow.');
        });
    });
  });
});