//задание 1 

function ucFirst(str) {
    if (!str) return str; 
    return str[0].toUpperCase() + str.slice(1);
  }

console.log(ucFirst("привіт")); 
console.log(ucFirst(""));        
console.log(ucFirst("hello"));   

//Задание 2 
function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('росі') || lowerStr.includes('xxx');
}

console.log(checkSpam('Це повідомлення містить росі')); 
console.log(checkSpam('Тут немає спаму')); 
console.log(checkSpam('Тут є XXX')); 

//Задание 3 

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '…';
    } else {
        return str;
    }
}

console.log(truncate("Що я хотів розповісти на цю тему:", 20)); 
//Задание 4 