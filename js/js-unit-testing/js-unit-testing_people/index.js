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
  const olderThanGiven = people.some((person) => person.age > age);
  return olderThanGiven;
}

export function getFullNamesSortedByAge(people) {
  const orderedAge = people
    .sort((a, b) => {
      return a.age - b.age;
    })
    .map((person) => `${person.firstName} ${person.lastName}`);
  return orderedAge;
}
