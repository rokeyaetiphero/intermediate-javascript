const output = [];
const students = [
    { id: 21, name: 'Luna Lovegood' },
    { id: 31, name: 'Hermione Granger' },
    { id: 41, name: 'Tom Felton' },
    { id: 51, name: 'Hogwarts' }
];

// for (let i = 0; i < students.length; i++){
//     const element = students[i];
//     const result = students[i].name;
//     console.log(result);
// }

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>40);
const biggerOne = students.find(s => s.id>40);

console.log(names);
console.log(ids);
console.log(biggerOne);
