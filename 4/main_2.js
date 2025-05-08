
//Задание 1
let styles = ["Jazz", "Blues"]
styles.push("Rock-n-Roll")
let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Classics";
let firstElement = styles.shift();
console.log(firstElement);
styles.unshift("Rap", "Reggae");
console.log(styles);

//Задание 2 
function sumInput() {
    const numbers = [];
    
    while (true) {
      const input = prompt("Введіть число:");
      if (input === null || input.trim() === "") {
        break;
      }
      const number = Number(input);
      if (!isNaN(number)) {
        numbers.push(number);
      } else {
        break;
      }
    }
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum;
  }

//Задание 3

function getMaxSubSum(arr) {
    let maxSum = -Infinity; // для випадків, коли всі числа від’ємні
    let currentSum = 0;

    for (let num of arr) {
        currentSum += num;
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    return maxSum;
}

const arr = [1, -2, 3, 4, -9, 6];
console.log(getMaxSubSum(arr)); // Виведе 7 (підмасив [3, 4])