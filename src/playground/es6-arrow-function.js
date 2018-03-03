
 // babel src/playground/es6-arrow-function.js --out-file=public/scripts/app.js --presets=env,react --watch

 //const add = function(a, b) {
//   return a + b;
 //};

const getFisrtName = function (fullName) {
  return fullName.split(' ')[0];
};

console.log(getFisrtName("mohamed jadib"))
