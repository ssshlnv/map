// 32.1 
//  let array1 = [1, 2, 3];
//  let array2 = [4, 5, 6];
//  let array3 = [7, 8, 9];

//  let map = new Map();
 
//  map.set(array1, 'pumpum');
//  map.set(array2, 'tururu');
//  map.set(array3, 'ghri');
 
//  for (let [key, value] of map) {
//    console.log(key + ' = ' + value);
//  }

// 32.2
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let array3 = [7, 8, 9];
// let a = 'a';
// let b = 'b';
// let c = 'c';

// let map = new Map();

// map.set(a, array1);
// map.set(b, array2);
// map.set(c, array3);
// for (let [key, value] of map) {
//     console.log(key + ' = ' + value);
//     }

// 35.1
// let mymap = new Map();
// mymap.set('key1', '1');
// mymap.set('key2', '2');
// mymap.set('key3', '3');

// let b = Array.from(mymap.keys());

// for (let key of b) {
//   console.log(key);
// }

// 35.2
// let mymap = new Map();
// mymap.set('key1', '1');
// mymap.set('key2', '2');
// mymap.set('key3', '3');

// let a = Array.from(myMap.entries());

// for (let [key, value] of a) {
//   console.log(Ключ: ${key}, Значение: ${value});
// }

// 36.1
// document.addEventListener('DOMContentLoaded', function() {
//     let inputs = document.querySelectorAll('input');
//     let inputMap = new Map();
  
//     inputs.forEach((input, index) => {
//       inputMap.set(input, index + 1); 
//       input.addEventListener('click', function() {
//         input.value = inputMap.get(input); 
//       });
//     });
//   });

// 36.2
// document.addEventListener('DOMContentLoaded', function() {
//     let inputs = document.querySelectorAll('input');
//     let inputValues = [];
  
//     inputs.forEach(input => {
//       input.addEventListener('keypress', function(event) {
//         if (event.key === 'Enter') {
//           inputValues.push(Number(input.value)); 
//           input.value = ''; 
//         }
//       });
  
//       input.addEventListener('blur', function() {
//         console.log(inputValues); 
//       });
//     });
//   });
  