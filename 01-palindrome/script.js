/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 * 
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 * 
*/

function palindrome(str) {

    if (typeof (str) != 'string') {
        return false;
    }

    const excludedCharacters = '!.,;:@<>';

    const strUP = str.toUpperCase();
    const length = str.length;
    let start = 0;
    let end = length - 1;
    let fromStart = '';
    let fromEnd = '';
    while (start != end) {
        fromStart = strUP[start];
        if (excludedCharacters.includes(fromStart)) {
            start += 1;
            continue;
        }
        fromEnd = strUP[end];
        if (excludedCharacters.includes(fromEnd)) {
            end += -1;
            continue;
        }

        if (fromStart != fromEnd) {
            return false;
        }
        isPalindrome = true;
        start += 1;
        end += -1;
    }

    return true;

    // return str.toUpperCase().split('').reverse().join('') == str.toUpperCase();
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(palindrome('топот')); // должно быть true
console.log(palindrome('Saippuakivikauppias')); // true
console.log(palindrome('привет')); // false

/*
 * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
 * но пробелы и знаки препинания не учитывает. Например:
 * 
 * palindrome('О, лета тело!'); // true
 * 
*/