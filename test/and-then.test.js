/* eslint-env mocha */
const assert = require('assert');

const {
  consumePromise,
} = require('../answers/and-then');

describe('Promise.prototype.then() && Promise.prototype.catch()', () => {
  describe('consumePromise(promise, consumer, errorHandler) => void', () => {
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
});