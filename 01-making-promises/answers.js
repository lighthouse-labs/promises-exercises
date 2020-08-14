
/**
 * 
 * EXERCISE 1
 * 
 * @returns {Promise<3>}
 */
function makePromiseResolveWith3(){
  return new Promise((resolve, reject) => {
    resolve(3)

  })
  /* IMPLEMENT ME! */
}

/**
 * 
 * EXERCISE 2
 * 
 * @returns {Promise<,"Boo!">}
 */
function makePromiseRejectWithBoo(){
  return new Promise((resolve, reject) => {
    reject("Boo!")

  })
  /* IMPLEMENT ME! */
}

/**
 * 
 * EXERCISE 3
 * 
 * @param {boolean} itShouldResolve - Whether the promise should resolve or reject
 * @returns {Promise<undefined, undefined>}
 */

function makePromiseWithConstructor(itShouldResolve){
  return new Promise((resolve, reject) => {
    if (itShouldResolve == true) {
      resolve("truthy")
    } else {
      reject("falsy")
    }


    /* If itShouldResolve is true, call resolve */
    /* If itShouldResolve is false, call reject */
  });
}

/**
 * 
 * EXERCISE 4
 *
 * @param {any} value 
 * @param {number} delayInMs 
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function makeDelayPromise(value, delayInMs){
  return new Promise((resolve, reject) => {
    setTimeout( function() {
      resolve(value)
    }, delayInMs)
  })
  /* Return a promise that resolves with the value after delayInMs */
}

module.exports = {
  makePromiseResolveWith3,
  makePromiseRejectWithBoo,
  makePromiseWithConstructor,
  makeDelayPromise,
};