let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
];
// 1) array nomi studenti MAIUSCOLI
const upperCaseStudents = [];
students.forEach(
    (element) => {
        upperCaseStudents.push(element.name.toUpperCase())
    }
);
console.log(upperCaseStudents);

// 2) array studenti voti superiori a 70
over70Grades = [];
students.filter(
    (element) => {
        if ( element.grades > 70 ){
            over70Grades.push(element.name);
        }
    }
);
console.log(over70Grades);

//3) array studenti che hanno un totale di voti superiore a 70 e id superiore a 120
topStudents = [];
students.filter(
    (element) => {
        if ( element.grades > 70 && element.id > 120 ){
            topStudents.push(element.name);
        }
    }
);
console.log(topStudents);