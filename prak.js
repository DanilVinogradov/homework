 // Практика 3. Задание 1 
 function random(min, max) {
    return Math.random() * (max - min) + min;
  }
  console.log(random(1.5, 5));

//Задание 2 

function isPrime(num) {
    if (num <= 1) return false; 
    if (num === 2) return true; 
    if (num % 2 === 0) return false; 

    const sqrtNum = Math.sqrt(num);
    for (let i = 3; i <= sqrtNum; i += 2) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}

console.log(isPrime(17)); 
console.log(isPrime(18)); 


//Задание 3 

function sum(n) {
    if (n >= 1) {
      return (n * (n + 1)) / 2;
    } else {
      const positiveN = -n;
      return - (positiveN * (positiveN + 1)) / 2;
    }
  }

console.log(sumFrom1ToN(10)); 
console.log(sumFrom1ToN(-5));  
console.log(sumFrom1ToN(0));  