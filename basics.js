console.log("Lets start");

/* variable hoisting
 *   All the declarations are shifted to the top of the file but the value reflects only after assignment
 *   Only works for "var"
 */
console.log(x); // undefined
x = 1;
console.log(x); // 1
var x;
console.log(x); // 1

// console.log(y); // error
// y = 1;
// console.log(y);
// let y;
// console.log(y);

// Arithmetic Operators

// var scope
console.log("var scope");
function test() {
  a = 10;
  var a;
  console.log(a);
}
test(); // 10
// console.log(a); // error
