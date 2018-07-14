/* eslint-env mocha */

describe('Promise.resolve(val)', () => {
  it('create a resolving promise');
});
describe('Promise.reject(err)', () => {
  it('creates a rejecting promise');
});
describe('Promise constructor "new Promise((resolve, reject) => void)', () => {
  it('creates a promise that can resolve or reject');
  it('can be used to turn a callback into a promise');
  it('can be combined with setTimeout to create a delayed promise');
});
