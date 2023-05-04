// Store JSON data in a JS variable
var json = '{"name": "Peter", "age": 22, "country": "United States"}';

// Converting JSON-encoded string to JS object
var obj = JSON.parse(json);

// Accessing individual value from JS object
console.log(obj.name); // Outputs: Peter
console.log(obj.age); // Outputs: 22
console.log(obj.country); // Outputs: United States