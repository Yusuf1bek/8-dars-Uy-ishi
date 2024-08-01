// Uy-ishi
// task -1
// let arr = [55, 3, 2, 11, 3, 4, 6, 7, 12];
// function numberFunc(arr) {
//     let a = arr.length;
//     for (let i = 0; i < a - 1; i++) {
//         for (let j = 0; j < a - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let total = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = total;
//             }
//         }
//     }
//     return arr;
// }
// let res = numberFunc(arr);   
// console.log(res);
// task -1

// task -2
// let arr = [1, 6, 9, 5, 8, 0, 15];
// function rangeSum(arr, indexStart, indexEnd) {
//     let total = 0;
//     for (let i = indexStart; i <= indexEnd; i++) {
//         total += arr[i];
//     }
//     return total;
// }
// let res = rangeSum(arr, 2, 4);
// console.log(res); 
// task -2

// task -3
// let arr = [2, 4, 5, 6, 6, 3, 2, 1];
// function cloneNumFunc(array) {
//     let simpleArr = [];
//     for (let i = 0; i < array.length; i++) {
//         if (!simpleArr.includes(array[i])) {
//             simpleArr.push(array[i]);
//         }
//     }
//     return simpleArr;
// }
// let res = cloneNumFunc(arr);
// console.log(res); 
// task -3

// task -4
// let arr = [2, 4, 5, 6, 6, 3, 2, 1];
// let minNumber = arr[0];
// let maxNumber = arr[0];

// arr.forEach((num) => {
//     if (num < minNumber) {
//         minNumber = num;
//     }
//     if (num > maxNumber) {
//         maxNumber = num;
//     }
// });
// console.log("Kichik qiymat -", minNumber); 
// console.log("Kotta qiymat -", maxNumber); 
// task -4

// task -5
// let arr = [2, 4, 5, 6, 6, 3, 2, 1];
// function arrReversed(array) {
//     let arrReverse = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         arrReverse.push(array[i]);
//     }
//     return arrReverse;
// }
// let res = arrReversed(arr);
// console.log(res); 
// task -5

// task -6
// let arr = [5, 4, 36, 7, 8, 3, 2, 9, 6, 1];

// let numberOdd = arr.filter(num => num % 2 !== 0);

// console.log("Toq sonlar -", numberOdd);
// console.log("Toq sonlarning soni -", numberOdd.length, "ga teng");
// task -6

// task -7
// let arr = [2, 3, 4, 5, 7];
// let numberOdd = arr
//     .map((value,index) => index % 2 !== 0 ? index : null)
//     .filter(index => index !== null);
// console.log("Toq sonlarning indeksi -", numberOdd);
// task -7

// task -8
// let arr = [2, 1, 3, 8, 4];
// function numberFunc(array) {
//     let res = array.map(value => (value % 2 !== 0 ? 0 : value));
//     return res;
// }
// let newArr = numberFunc(arr);
// console.log(newArr); 
// task -8

// task -9
// function arrOddNumber(n) {
//     let numberOdd = [];
//     let numberCurrent = 1;
//     for (let i = 0; i < n; i++) {
//         numberOdd.push(numberCurrent);
//         numberCurrent += 2; 
//     }
//     let res = [];
//     numberOdd.forEach(num => res.push(num));
//     return res;
// }
// let res = arrOddNumber(10);
// console.log(res);
// task -9

// task -10
// let arr = [22, 3, 5, 6, 3, 2, 3];
// function arrReverce(arr) {
//     let arrReversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         arrReversed.push(arr[i]);
//     }
//     return arrReversed;
// }
// let res = arrReverce(arr);
// console.log(res); 
// task -10

// task -11
// let arr = [3, 5, 6, 3, 2, 3];
// function funcArr(arr) {
//     let secondArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let uniqueIs = true;
//         for (let j = 0; j < secondArr.length; j++) {
//             if (arr[i] === secondArr[j]) {
//                 uniqueIs = false;
//                 break;
//             }
//         }
//         if (uniqueIs) {
//             secondArr.push(arr[i]);
//         }
//     }
//     return secondArr;
// }
// let res = funcArr(arr);
// console.log(res); 
// task -11

// task -12
// let array = [22, 3, 5, 6, 8, 3, 7, 12];
// function arrFunc(arr) {
//     let minNumber = null;
//     let evenNumber = arr.map((value, index) => {
//         if (index % 2 === 0) {
//             return value; 
//         } else {
//             return undefined;
//         }
//     }).filter(value => value !== undefined); 
//     evenNumber.forEach(value => {
//         if (minNumber === null || value < minNumber) {
//             minNumber = value;
//         }
//     });
//     return minNumber;
// }
// let res = arrFunc(array);
// console.log(res); 
// task -12
// Uy-ishi