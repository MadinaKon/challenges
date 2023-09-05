const people = [
  {
    id: 1,
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    age: 18,
  },
  {
    id: 3,
    firstName: "Max",
    lastName: "Mustermann",
    age: 32,
  },
  {
    id: 4,
    firstName: "Erika",
    lastName: "Musterfrau",
    age: 38,
  },
  {
    id: 5,
    firstName: "Luke",
    lastName: "Skywalker",
    age: 23,
  },
];

export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => `${person.firstName} ${person.lastName}`);
}

export function getNameAndAge(people) {
  return people.map((person) => `${person.lastName} (${person.age})`);
}

export function getPeopleByAge(people, age) {
  const peopleList = people.filter((person) => person.age >= age);
  const matches = peopleList.map(
    (people) => `${people.firstName} ${people.lastName}`
  );

  return matches;
}

getPeopleByAge(people, 23);
export function getPeopleNamesOlderThan(people, age) {
  const peopleList = people.filter((person) => person.age > age);

  const olderThan = peopleList.map(
    (people) => `${people.firstName} ${people.lastName}`
  );

  return olderThan;
}

export function getPeopleByLastName(people, lastName) {
  const peopleList = people.filter((person) => person.lastName === lastName);
  const matches = peopleList.map((people) => `${people.lastName}`);
  return matches;
}

export function findPersonById(people, id) {
  const result = people.find((person) => person.id === id);
  return result;
}

export function isAnyoneOlderThan(people, age) {
  
}

export function getFullNamesSortedByAge(people) {}
