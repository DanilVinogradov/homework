function sumSalaries(salaries) {  //задание 1 
  let total = 0;
  for (const salary of Object.values(salaries)) {
    total += salary;
  }
  return total;
}
const salaries = {
  "Іван": 100,
  "Петро": 300,
  "Марія": 250
};

console.log(sumSalaries(salaries)); 



/*function count(obj) {          //Задание 2 
  return Object.keys(obj).length;
}

let user = {
    name: 'Іван',
    age: 30
};

alert ( count(user) ); */


