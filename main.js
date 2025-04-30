let user = {
    name:"Mark",
    surname:"Smit"
};
console.log("Результат" + (user.name));

user.name="Тарас";
console.log("Результат" + (user.name));

delete user.name;
console.log("Результат" + (user.name));


//Задание 2 
alert( isEmpty(user) );

//Задание 3 
let salaries = {
    Jarik: 1000,
    Anna: 1600,
    Miko: 1300
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  console.log(sum);

  //Задание 4 

  let number = {
    number_1: 20,
    number_2: 30,
    number_3: 50,
    title:"number"
  };

  multiplyNumeric(number);
