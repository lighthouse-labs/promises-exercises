
/**
 * 
 * EXERCISE 1
 * 
 * Use Promise.resolve(val) to create a promise that will resolve with the value 3
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
 * 
 * @returns {Promise<3>}
 */
function makePromiseResolveWith3(){
  /* IMPLEMENT ME! */
}

/**
 * 
 * EXERCISE 2
 * 
 * Use Promise.reject to create a promise that will reject with the string "Boo!" 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
 * 
 * @returns {Promise<,"Boo!">}
 */
function makePromiseRejectWithBoo(){
  /* IMPLEMENT ME! */
}

/**
 * 
 * EXERCISE 3
 * 
 * Use a Promise constructor to create a promise that will:
 *   - resolve if itShouldResolve is truthy
 *   - reject if itShouldResolve is falsy
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * 
 * @param {boolean} itShouldResolve - Whether the promise should resolve or reject
 * @returns {Promise<undefined, undefined>}
 */

function makePromiseWithConstructor(itShouldResolve){
  return new Promise((resolve, reject) => {
    /* If itShouldResolve is true, call resolve */
    /* If itShouldResolve is false, call reject */
  });
}

/**
 * 
 * EXERCISE 4
 * 
 * This is a common use of the Promise constructor. If you want to simulate waiting for a value, a common technique is to create a function like the following.  It simply accepts a value, and a delayInMs, then returns a promise that will resolve with that value after that delay.
 * 
 * @param {any} value 
 * @param {number} delayInMs 
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function makeDelayPromise(value, delayInMs){
  /* Return a promise that resolves with the value after delayInMs */
}

module.exports = {
  makePromiseResolveWith3,
  makePromiseRejectWithBoo,
  makePromiseWithConstructor,
  makeDelayPromise,
};