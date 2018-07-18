/**
 * 
 * INTRODUCTION:
 * 
 * This set of exercises is all about making promises from one particular format: node-style callbacks.
 * 
 * Node-style callbacks, or error-first callbacks, are simple callbacks for async processes.  They have two possible params: an error if the async process failed, and a value if the async process succeeded.  Here's an article discussing them further.
 * 
 * http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/
 * 
 * Here's a simple example of that: a password checker.  This is a simple function, taking in an email and a password.  If that matches a record in our database, then we return it, or we return undefined.
 * 
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns {User | undefined}
 */

function passwordChecker(email, password){
  if(email === 'jeff@jeff.jeff' && password === 'jeff'){
    return {name: 'Jeff Jeffries', email: 'jeff@jeff.jeff'};
  }
  return undefined;
}

/**
 * 
 * Now, let's say that we want to add a safety feature: a 1000ms delay if the call is unsuccessful.  That means that, for a user who may have mistyped their password, they'll have a small delay before entering it more carefully.  For a hacker trying a brute-force attack, they'll have to wait a second between attempts.
 * 
 * Well, it's a great feature, but it now introduces asynchrony into our function. If we used a node-style callback, that would take our function signature from this:
 * 
 * (email:string, password:string) => User | undefined
 * 
 * to this:
 * 
 * (email:string, password:string, cb:(error, User) => void) => void
 * 
 * So, two big changes.
 * - We don't return anything anymore (that's what the word "void" means)
 * - We have the same parameters as the synchronous version + another param: the node-style callback.
 * 
 * If we have a user, we will call the callback as cb(null, user).
 * 
 * If we don't have a user, we will wait 1000 ms and then call the callback with a message for the error param.  cb('User Not Found!')
 * 
 * @param {string} email 
 * @param {string} password 
 * @param {nodeStyleCallback} cb 
 */
function passwordCheckerCb(email, password, cb){
  const user = passwordChecker(email, password);
  if(user){
    cb(null, user);
  } else {
    setTimeout(() => {
      cb('User Not Found!');
    }, 1000);
  }
}

/**
 *
 * EXERCISE 1:
 * 
 * The function above works well for our purpose, but we want to use promises to handle async processes.  Instead of the following function signature:
 * 
 * (email:string, password:string, cb:(error, User) => void) => void
 * 
 * We're going to return a promise, and get rid of that callback.
 * 
 * (email:string, password:string) => Promise<User, Error>
 * 
 * We already have most of this written out.  We'll use the Promise constructor, and call passwordCheckerCb from within it.
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<User, string>}
 */
function passwordCheckerPrms(email, password){
  return new Promise((resolve, reject) => {
    passwordCheckerCb(email, password, (error, user) => {
      /* IMPLEMENT ME! */
    });
  });
}

module.exports = {
  passwordCheckerCb,
  passwordCheckerPrms,
};