/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function isPrime(n) {

    let divider = 1;
    let dividerCounter = 0;

    while (divider <= n) {

        if (n % divider == 0) {
            dividerCounter += 1;
        }

        if (dividerCounter > 2) break;

        divider += 1;

    }

    return dividerCounter == 2;

}

function primes(num) {
    
    const arr = [];
    let i = 2;
    while ( i <= num) {
        if (isPrime(i)) arr.push(i);
        i += 1;
    }

    return arr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]