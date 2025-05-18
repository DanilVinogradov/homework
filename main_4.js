function unique(arr) {            //Задание 1 
  
  return Array.from(new Set(arr));
}

const inputArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = unique(inputArray);
console.log(uniqueArray); 


function aclean(arr) {                    //Задание 2 
  const map = new Map();

  arr.forEach(word => {
    const sorted = word.toLowerCase().split('').sort().join('');
    if (!map.has(sorted)) {
      map.set(sorted, word);
    }
  });
  return Array.from(map.values());
}

const words = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(words)); 


function countOccurrences(arr) { // Задание 3 
  const resultMap = new Map();

  arr.forEach((num) => {
    if (resultMap.has(num)) {
      resultMap.set(num, resultMap.get(num) + 1);
    } else {
      resultMap.set(num, 1);
    }
  });

  return resultMap;
}
const array = [1, 2, 2, 3, 3, 3, 4];
const counts = countOccurrences(array);
console.log(counts);


function areElementsUnique(arr) {   //Задание 4 
  return new Set(arr).size === arr.length;
}
console.log(areElementsUnique([1, 2, 3, 4])); 
console.log(areElementsUnique([1, 2, 2, 4])); 