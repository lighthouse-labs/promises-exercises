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
    /* IMPLEMENT ME!! */
    promise.then(result => {
      resolve(transformer(result))
    }).catch(err => {
      reject(err)
    }) 
})
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise) {
  return numberPromise
    .then(res =>  {
      return new Promise((resolve, reject) => {
        if (!isNaN(res)) {
          resolve(res * res)
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
    .catch(err => {
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
  return promise.then(successCb => Promise.reject(successCb), failureCb => Promise.resolve(failureCb));
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