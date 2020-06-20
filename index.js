const encrypt = require('./functions/encrypted_cesar.js');
const firstDegreeCurry2 = require('./functions/currying.js');

console.log("DECODED", "abcz");
console.log("ENCODED", encrypt("abcz", 3));

console.log("Example Function Curry", firstDegreeCurry2(4)(5)(6));