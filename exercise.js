function calculateAverageAge(persons) {
  const averageAge = Math.round(persons.map((el) => el.age).reduce((acc, curr) => acc + curr) / persons.length);
  return averageAge;
};

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

console.log(calculateAverageAge(persons));