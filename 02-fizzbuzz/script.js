/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
    
    const number = Number(num);

    if (!number) return;

    let i = 1;

    while ( i <= number ) {
        
        if (! (i % 15)) {
            console.log('fizzbuzz');
        } else if (!(i % 5)) {
            console.log('buzz');
        } else if (!(i % 3 )) {
            console.log('fizz');
        } else {
            console.log(i);
        }
        
        i += 1;
    }

}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15));