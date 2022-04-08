// // Напишите функцию, которая проверяет, является ли второй массив подмножеством первого.
// То есть есть ли элементы второго массива в первом.

// // **Input**: Number[] & String[], Number[] & String[]

// // **Output**: Boolean

function arraySubset(source: Array<number>, subset: Array<number>) {
   if (source.length < subset.length) {
      return false;
   }
   for (let i = 0; i < subset.length; i++) {
      const index = source.indexOf(subset[i]);
      if (index === -1) {
         return false;
      }
      delete source[index];
   }
   return true;
}

console.log(arraySubset([2, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])); // -> false
console.log(arraySubset([1, 2], [1, 2, 3])); // -> false
