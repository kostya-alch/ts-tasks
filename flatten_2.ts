// ### Плоский массив

// Напишите функцию, принимающая массив с вложенными массивами и распакуйте в результирующий плоский массов.
//  В результате должны получить новый одномерный массив.

// **Input**: Array

// **Output**: Array

function flatten(array: Array<any>) {
   const resArray = [];

   for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
         const flat = flatten(array[i]);
         for (let j = 0; j < flat.length; j++) {
            resArray.push(flat[j]);
         }
      } else {
         resArray.push(array[i]);
      }
   }
   return resArray;
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])); // -> [1, 2, 3, 4]
