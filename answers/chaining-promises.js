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
 * @param {function} asyncTransformer 
 */
function flatMapPromise(promise, asyncTransformer){
  return new Promise((resolve, reject) => {
    promise
      .then(/* IMPLEMENT ME! */);
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * I'm sure you're already a few steps ahead of me here, but just like with transforming promises with synchronous promises, we have a method to do this: .then(cb)!  
 * 
 * If you return a promise from your callback to .then, you won't have a promise of a promise of some value.  It'll just kinda smoosh them together, so a promise of a promise of a promise of an array just becomes a promise of an array.
 * 
 * Let's practice that!  You're going to create an example like the one above, which will use .then(cb) to transform the value of a promise using another async process.  It's a little hairy, but we'll start out with some code.
 * 
 * @param {Promise} firstPromise 
 * @param {function} slowAsyncProcess 
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess){
  return firstPromise.then(/* IMPLEMENT ME! */);
}

function makeGetUserByIdWithOrganization(getUserById, getOrganizationById){
}

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};