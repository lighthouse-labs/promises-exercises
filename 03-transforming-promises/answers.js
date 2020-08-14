/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer 
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    promise
    .then(response => transformer(response))
    .then(response2 => resolve(response2))
    .catch(error => reject(error))
    .catch(error => reject(error))
  })
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  return numberPromise
    .then(res => {
      return new Promise((resolve, reject) => {
        if (!isNaN(res)) {
          resolve(Math.pow(res, 2))
        } else {
          reject(`Cannot convert '${res}' to a number!`)
        }
      
      })
    })
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
  return squarePromise(promise)
    .catch(error => {
      return new Promise((resolve, reject) => {
        resolve(0)
      })
    });
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return promise.then(res => Promise.reject(res), res2 => Promise.resolve(res2));
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
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};