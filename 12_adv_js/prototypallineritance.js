
function Person(name) {
    this.name = name;

}

// Add method to prototype so all instances inherit it
Person.prototype.greet = function() {
    console.log(`Say hello to ${this.name}`);
}


// Create an instance of Person
const rahul = new Person("Rahul");


// Call the greet method on the instance
rahul.greet();  // Output: Say hello to Rahul
