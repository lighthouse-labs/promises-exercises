/**
 *
 * EXERCISE 1
 *
 * @param {Promise} promise
 * @param {function} asyncTransformer
 */
function flatMapPromise(promise, asyncTransformer) {
  return new Promise((resolve, reject) => {
    promise
      .then((res) => {
        resolve(asyncTransformer(res));
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise} firstPromise
 * @param {function} slowAsyncProcess
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess) {
  return firstPromise.then(res => {
    return Promise.resolve(slowAsyncProcess(res));
  })
}

/**
 *
 * EXERCISE 3
 *
 * @param {function} getUserById
 * @param {function} getOrganizationById
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById) {
  return function getUserByIdWithOrganization(userId) {
    return getUserById(userId).then(userOBJ => {
      if(userOBJ) {
        return getOrganizationById(userOBJ.organizationId).then(organizationOBJ => {
          userOBJ.organization = organizationOBJ;
          return userOBJ
        })
      }
    })
    /* IMPLEMENT ME! */
  };
}

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};
