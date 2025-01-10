// Implement a Basic Authentication Middleware
// Problem: Write a middleware to authenticate users via a username and password stored in a database.

// Required Time Complexity: Dependent on the database query O(1) for memory-based storage.

const users = new Map<string, string>([["raul", "testing123"]]);

function auth(username, password): boolean {
  const user = users.get(username);
  return !!user && user === password;
}

console.log(auth("raul", "testing125"));
console.log(auth("raul", "testing123"));
