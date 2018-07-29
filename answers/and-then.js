/**
 * 
 * The following exercises will focus on using the .then and .catch methods of promises.  These are very important methods, not only for consuming values or handling errors, but also for transforming and combining promises.
 * 
 */
/**
 * 
 * EXERCISE 1
 * 
 * In this exercise, we will use then and catch for their most basic use: to consume the result of a successful async process, or to handle the error of a failed async process.  We will be given a promise, a consumer, and a handler.  Set it up so that, if the promise resolves, the consumer will be called with the result, and if the promise rejects, the handler will be called with the error.
 * 
 * @param {Promise} promise 
 * @param {consumer} consumer 
 * @param {handler} handler 
 */
function consumePromise(promise, consumer, handler){
  /* IMPLEMENT ME! */
}

/**
 * 
 * EXERCISE 2
 * 
 * In this exercise, we'll create a function that can take in a promise and a transformer function and return a new transformed promise.
 * 
 * In the previous exercise, we used .then(cb) in an imperative way, responding to its resolution by triggering a side effect.  But what if we want to create a new promise based on that resolution, but one that changed the value somehow?
 * 
 * It's similar to arrays in this way: sometimes we use .then(cb) the way we would use .forEach(cb), which helps us perform some action, some side effect based on the value.  For instance:
 * 
 * const result = [2, 5, 3].forEach((num) => {
 *   console.log(num);
 * });
 * 
 * will print "2", "5", and "3" to the terminal, but result will be undefined.  We did some stuff, and nothing was returned.  Classic imperative code.
 * 
 * But what if we wanted a new array with all these number squared?  We could write the following, of course:
 * 
 * const squares = [];
 * [2, 5, 3].forEach((num) => {
 *   squares.push(num * num);
 * });
 * 
 * But there's already a common array function that does just this: .map(cb), which lets us write that as a one-liner:
 * 
 * const squares = [2, 5, 3].map(num => num * num)
 * 
 * The squares array now contains [4, 25, 9].  But why discuss arrays?  Because promises are similar.  Sometimes, you want to perform a side effect when that resolves, but sometimes, you'd like that result to be formatted in some different way.
 * 
 * So, we're going to create a function that does just that to promises.  It's called mapPromise, it takes in a promise and a transformer callback, and returns a new promise that follows these rules:
 * 
 * - If the first promise rejects with an error, the new promise rejects with that error.
 * - If the first promise resolves with a result, it calls the transformer with the value as an argument.
 *   - If the transformer returns with a value, the new promise resolves with that value.
 *   - If the transformer throws an error, the new promise rejects with that error.
 * 
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    /* IMPLEMENT ME!! */
  });
}

/**
 * 
 * EXERCISE 3
 * 
 * I have good news about the function above: it already exists!  In fact, you've been using it this whole time!  Its .then(cb)!
 * 
 * In the previous exercise, we used .then(cb) in an imperative way, performing some action on the resolved value, but delayed.  But we can also use .then(cb) declaratively, returning a new promise that will resolve with a transformed value.  
 * 
 * In this exercise, we'll be passing a promise that resolves with a number or a string.  We want to return with a promise such that:
 * 
 * - If the input promise resolves with a number, the output promise resolves with the square of that number.
 * - If the input promise resolves with a string that we can turn into a number (like "1234"), the output promise resolves with the square of that number (1522756 in this example)
 * - If the input promise resolves with a string that we cannot turn into a number (like "asdf"), then we reject with a message like "Cannot convert 'asdf' to a number!"
 * - If the input promise rejects with an error, the output promise rejects with the same error
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  return numberPromise
    .then(/* IMPLEMENT ME! */);
}

/**
 * EXERCISE 4
 * 
 * In the same way that we can use .then to transform a promise when it resolves, we can also use .catch to transform a promise when it rejects.  If we return a value from a .catch, we create a new promise that will resolve.  Likewise, if we throw an error in a .catch, the new promise will reject with that new error.
 * 
 * We're going to refactor the above promise so that it always resolves with the value 0.

 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
  return squarePromise(promise)
    .catch(/* IMPLEMENT ME! */);
}

/**
 * EXERCISE 5
 * 
 * One interesting feature of the .then(cb) function is that it can actually take in two callbacks, one for success and one for failure.  In most cases, running
 * 
 * somePromise
 *   .then(successCb)
 *   .catch(failureCb)
 * 
 * is equivalent to 
 * 
 * somePromise
 *   .then(successCb, failureCb)
 * 
 * But there's one noteworthy exception.  In the first code, the .then(cb) returns a new promise to which we attach the .catch.  That means that it's possible for the first promise to resolve, and the second to reject, which means that the catch could be catching failures from the first promise OR the second promise.  When we pass in the failureCb with the successCb, we guarantee that our failureCb is ONLY catching the rejection of the first promise.
 * 
 * We can examine this by making a function called "switcheroo".  It'll take in a promise and return a promise such that:
 * 
 * - If the input promise rejects with an error, the output promise will resolve with that error.
 * - If the input promise resolves with a value, the output promise will reject with that value.
 * 
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return promise.then(/* IMPLEMENT ME */);
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  consumePromise,
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};