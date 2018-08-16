/**
 * 
 * EXERCISE 1
 * 
 * Just as we did with mapPromise, we want to envision a new way of transforming promises: chaining them.  We want to be able to have one promise resolve, then when it's done, use its value to start a second async process that returns a promise.
 * 
 * WE DON'T WANT TO START THAT SECOND PROCESS UNTIL AFTER THAT FIRST PROCESS RESOLVES!  In this way, we can imagine that we may need some artifact from the first process before we can start the second.  For instance, we may want to create a User object in a database, get an id back, and then use that UserId to create a series of, say, services that this user can access.
 * 
 * This chaining is a common problem in async, so let's create a function to do this.
 * 
 * @param {Promise} promise 
 * @param {*} asyncTransformer 
 */
function flatMapPromise(promise, asyncTransformer){
  return new Promise((resolve, reject) => {
    promise
      .then(/* IMPLEMENT ME! */);
  });
}


module.exports = {
  flatMapPromise,
};