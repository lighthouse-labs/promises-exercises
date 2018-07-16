
/**
 * 1) Use Promise.resolve(val) to create a promise that will resolve with the value 3
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
 * 
 * @returns {Promise<3>}
 */
function makePromiseResolveWith3(){
  /* IMPLEMENT ME! */
}

/**
 * 2) Use Promise.reject to create a promise that will reject with the string "Boo!"
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
 * 
 * @returns {Promise<,"Boo!">}
 */
function makePromiseRejectWithBoo(){
  /* IMPLEMENT ME! */
}

/**
 * 
 * 3) Use a Promise constructor to create a promise that will:
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
 * 4) This is a common use of the Promise constructor. If you want to simulate waiting for a value, a common technique is to create a function like the following.  It simply accepts a value, and a delayInMs, then returns a promise that will resolve with that value after that delay.
 * 
 * @param {any} value 
 * @param {number} delayInMs 
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function makeDelayPromise(value, delayInMs){
  /* Return a promise that resolves with the value after delayInMs */
}

/**
 * 5) Here is another common use of the Promise constructor: to convert a callback-centric async function.  You can imagine a synchronous function that takes three params a, b, c, and returns some value d.
 * 
 * SYNC: (a, b, c) => d
 * 
 * There might be an asynchronous, callback version of this that would take those same parameters but also a fourth parameter: a node-style callback.
 * 
 * ASYNC: (a, b, c, callback) => void
 * 
 * (Small aside: the word "void" means that the function doesn't return any value.)
 * 
 * The node-style callback has a simple signature: (error, value) => void.  If there is a value for the error parameter, that means that the async process failed and we should handle the error.  If there is no error, that means the async process was successful, and we should process the result.
 * 
 * In other words, this method might not return d, but it will call the callback with d as a parameter.
 * 
 * Promises are another take on this.  Our method signature is now:
 * 
 * ASYNC: (a, b, c) => Promise<d>
 * 
 * This challenge is to take the callback version of this function, all the necessary params, and return a promise.
 * 
 * @param {CallbackStyleAsyncFunction} fn
 * @param {*} fnParams 
 * @return {Promise<any, any>}
 */
function makePromiseFromFunctionWithCallback(fn, ...fnParams){
  /* Call fn with the fn params and a Node-style callback. */
}

/**
 * @callback CallbackStyleAsyncFunction
 * @param {*} fnParams
 * @param {NodeStyleCallback} cb
 */
/**
 * @callback NodeStyleCallback
 * @param {Error} error
 * @param {any} result
 * @returns {void}
 */

module.exports = {
  makePromiseResolveWith3,
  makePromiseRejectWithBoo,
  makePromiseWithConstructor,
  makeDelayPromise,
  makePromiseFromFunctionWithCallback,
};