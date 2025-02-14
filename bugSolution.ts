function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string {
  return "Hello, " + people.join(', ');
}

let user = ["Jane Doe", "John Smith"];
let userSingle = "Jane Doe";

console.log(greeter(userSingle)); // Works Correctly
console.log(greeterArray(user)); // Works Correctly