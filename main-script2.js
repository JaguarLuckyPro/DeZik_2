// DeZik-task1
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
/* let initials; */

const initials = userNames.sort().map(element => {
const words = element.split(' ')
const initials = words.map(word => word.charAt().toUpperCase()).join('.');
return initials;
});
console.log(initials);

/* console.log(initials);  */// ["Г.П.А.", "П.О.І.", "Р.А.О."]

// DeZik-task2
const currentMaxValue = 4589;
// let reverseMaxValue;

const currentMaxiVal = currentMaxValue.toString();
console.log(currentMaxiVal);

const reverseMaxValue1 = [...currentMaxiVal].reverse().join("");

const reverseMaxValue = Number(reverseMaxValue1);
console.log(reverseMaxValue);

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

// DeZik-task3
const resultsArray = [1, 2, [3, [4]]];
/* et productOfArray; */

const middleResult = resultsArray.flat(2);
console.log(middleResult);

const productOfArray = middleResult.reduce((middleResult, product) => {
return middleResult * product;
});
console.log(productOfArray);

/* console.log(productOfArray); */ // 24