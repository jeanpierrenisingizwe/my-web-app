const { login } = require('./auth');
console.log(login("admin", "1234")); // Should print "Login successful!"
console.log(login("user", "pass")); // Should print "Invalid credentials!"
// index.js
console.log("Hello, World!");
