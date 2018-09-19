# promises-exercises

Set of exercises in using JS promises for handling asynchronous operations.

## Setup

1. Fork this repository.
2. Run `npm install` to download the Node modules.

## Using

For these exercises, you only need to go the `/answers` directory and implement the functions as directed.  Once correctly implemented, all the test suites should pass.  

* Run `npm test` to run all the test suites.
* Run `npm start` to watch all the test suites.

Or, you can run only the test suites for any exercise using the commands below.

> Quick tip:  To run any of the exercises below in watch mode, add `-- --watch`, (e.g. `npm run making-promises -- --watch`)

You are free to look at any of the tests for guidance, but don't change them.

## Outline

### The Promise Toolbox

These exercises are all about learning the mechanisms that we can use to create, transform, and combine promises.

* `npm run making-promises` - Create promises with Promise.resolve, Promise.reject, and the Promise constructor.
* `npm run consuming-promises` - Use `.then(cb)` and `.catch(cb)` to respond to a promise completing and do something with the result.
* `npm run transforming-promises` - Use `.then(cb)` and `.catch(cb)` to transform the results of async processes.
* `npm run chaining-promises` - Use `.then(cb)` and `.catch(cb)` to chain async processes.

### Promise Puzzles

Now it's time to use the tricks from above to solve some problems.

* `npm run callbacks` - Turn callback-centric functions into promise-centric functions.
