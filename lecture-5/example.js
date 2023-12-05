const person = {
    name: "John",
    age : 30,
    occupation : "Engineer",
};

const anotherPerson = person;
anotherPerson.name = "Jane";

console.log(person.name);