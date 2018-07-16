/**
 * 1) In this exercise, we will use then and catch for their most basic use: to consume the result of a successful async process, or to handle the error of a failed async process.  We will be given a promise, a consumer, and a handler.  Set it up so that, if the promise resolves, the consumer will be called with the result, and if the promise rejects, the handler will be called with the error.
 * 
 * @param {Promise} promise 
 * @param {consumer} consumer 
 * @param {handler} handler 
 */
function consumePromise(promise, consumer, handler){
  /* IMPLEMENT ME! */
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
};