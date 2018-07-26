/* eslint-env mocha */
const assert = require('assert');

const {
  consumePromise,
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
} = require('../answers/and-then');

describe('Promise.prototype.then() && Promise.prototype.catch()', () => {
  describe('#consumePromise(promise, consumer, errorHandler) => void', () => {
    it('calls the consumer on the resolve value of the promise', (done) => {
      const resolvedPromise = Promise.resolve('Yay!');
      function consumer(val){
        assert.equal(val, 'Yay!');
        done();
      }
      function handler(){
        assert.fail('This should not have been called.');
      }
      
      assert.equal(consumePromise(resolvedPromise, consumer, handler), undefined, 'Consume Promise should not return anything.');
    });
    it('calls the errorHandler on the rejection error of the promise', (done) => {
      const rejectedPromise = Promise.reject('Boo!');
      function consumer(){
        assert.fail('This should not have been called.');
      }
      function handler(err){
        assert.equal(err, 'Boo!');
        done();
      }
      assert.equal(consumePromise(rejectedPromise, consumer, handler), undefined, 'Consume Promise should not return anything.');
    });
  });

  describe('#mapPromise(promise, transformer) => Promise', () => {
    it('transforms a promises resolution value', () => {
      return mapPromise(Promise.resolve(3), (val) => {
        return val + val;
      })
        .then((val) => {
          assert.equal(val, 6);
        });
    });
    it('returns a promise that rejects if the first promise rejects', () => {
      return mapPromise(Promise.reject('Boo!'), (val) => val)
        .then((val) => {
          assert.fail('This should not resolve!  It resolved with: ' + val);
        }, (error) => {
          assert.equal(error, 'Boo!');
        });
    });

    it('returns a promise that rejects if the transformer throws an error', () => {
      return mapPromise(Promise.resolve(3), () => {
        throw new Error('Boo!');
      })
        .then((val) => {
          assert.fail('This should not resolve!  It resolved with: ' + val);
        }, (error) => {
          assert.equal(error.message, 'Boo!');
        });
    });
  });

  describe('#squarePromise(promise) => Promise', () => {
    it('squares the resolution value of the promise', () => {
      return squarePromise(Promise.resolve(5))
        .then((val) => {
          assert.equal(val, 25);
        });
    });
    it('converts a numeric string to a number and squares it', () => {
      return squarePromise(Promise.resolve('11'))
        .then((val) => {
          assert.equal(val, 121);
        });
    });
    it('rejects if the resolution value is not numeric', () => {
      return squarePromise(Promise.resolve('abc'))
        .then((val) => {
          assert.fail('This should not resolve!  It resolved with: ' + val);
        }, (err) => {
          assert.equal(err, 'Cannot convert \'abc\' to a number!');
        });
    });
    it('rejects if the input promise rejects.', () => {
      return squarePromise(Promise.reject(9))
        .then((val) => {
          assert.fail('This should not resolve!  It resolved with: ' + val);
        }, (err) => {
          assert.equal(err, 9);
        });
    });
  });
  describe('#squarePromiseOrZero(promise) => Promise', () => {
    it('squares the resolution value of the promise', () => {
      return squarePromiseOrZero(Promise.resolve(5))
        .then((val) => {
          assert.equal(val, 25);
        });
    });
    it('converts a numeric string to a number and squares it', () => {
      return squarePromiseOrZero(Promise.resolve('11'))
        .then((val) => {
          assert.equal(val, 121);
        });
    });
    
    it('resolves with 0 if the resolution value is not numeric', () => {
      return squarePromiseOrZero(Promise.resolve('abc'))
        .then((val) => {
          assert.equal(val, 0);
        });
    });

    it('rejects if the input promise rejects.', () => {
      return squarePromiseOrZero(Promise.reject(9))
        .then((val) => {
          assert.equal(val, 0);
        });
    });
  });
});