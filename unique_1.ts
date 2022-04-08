// // ### Уникальность всех символов в строке

// // Напишите функцию, которая определяет уникальны ли все символы в строке.
// Регистр должен учитываться: `‘a’` и `‘A’` разные символы.

// // **Input**: String

// // **Output**: Boolean

function isUnique(string: string) {
   //    for (let i = 0; i < string.length; i++) {
   //       const char = string[i];
   //       if (string.lastIndexOf(char) !== i) {
   //          return false;
   //       }
   //    }
   //    return true;

   //    const set = new Set();
   //    for (let i = 0; i < string.length; i++) {
   //       const char = string[i];
   //       if (set.has(char)) {
   //          return false;
   //       }
   //       set.add(char);
   //    }
   //    return true;
   new Set(string).size === string.length;
   // самое лаконичное решение - засовываем в set строку и проверяем совпадает ли длина строки с кол-вом set
}

console.log(isUnique('abcdef')); // -> true
console.log(isUnique('1234567')); // -> true
console.log(isUnique('abcABC')); // -> true
console.log(isUnique('abcadef')); // -> false
