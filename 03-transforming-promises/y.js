var a = "11"
var b ="aa"


var ans1 = parseInt(a, 10)
var ans2 = parseInt(b, 10)
var ans3 = Math.pow(b, 2)
console.log({ans1, ans2, ans3})




// function squarePromise(numberPromise){
//     return numberPromise
//       .then(res =>  Math.pow(res, 2))
//       .then(res2 => Promise.resolve(res2))
//       // `Cannot convert ${err} to a number!`
//       .catch(error => parseInt(error, 10))
//       .then(res3 => Promise.resolve(`Cannot convert ${res3} to a number!`))
//       .catch(error2 => Promise.reject(error2))
//       // Promise.reject(error))
//       // .catch(error => Promise.reject(error))
//   }