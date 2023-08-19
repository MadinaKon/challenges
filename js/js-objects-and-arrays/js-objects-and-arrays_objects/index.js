console.clear();

// EXERCISE 1
// Create an object personWithNameAgeEmail with the properties "name", "age" and "email".

const personWithNameAgeEmail = {
  name: "Madina",
  age: 30,
  email: "s057373@htw-berlin.de",
};

// EXERCISE 2
// Set the values of name and age equal to the corresponding values of the personAlex object.

const personAlex = {
  name: "Alex",
  age: 24,
};

// const nameOfAlex = personAlex["name"];
const nameOfAlex = personAlex.name;
// const ageOfAlex = personAlex["age"];
const ageOfAlex = personAlex.age;

console.log(" nameOfAlex ", nameOfAlex);
console.log("ageOfAlex ", ageOfAlex);

// EXERCISE 3
// Change the value of name to "Alex" and the value of age to "35"
// by updating the object personToChange: person.existingProperty = newValue.

const personToChange = {
  name: "Kim",
  age: 24,
};

// personToChange["name"] = "Alex";
// personToChange["age"] = 35;

personToChange.name = "Alex";
personToChange.age = 35;

console.log("personToChange ", personToChange);

// EXERCISE 4
// Add the properties age "5" and breed "husky" to the object petPluto: pet.newProperty = newValue.

const petPluto = {
  name: "Pluto",
  species: "dog",
};

petPluto.age = 5;
petPluto.breed = "husky";

// spread operator
petPluto = { ...petPluto, age: 5, breed: "husky" };

console.log("petPluto  ", petPluto);

export {
  personWithNameAgeEmail,
  nameOfAlex,
  ageOfAlex,
  personToChange,
  petPluto,
};
