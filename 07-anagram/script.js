/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {

    if (typeof (str1) != 'string' || typeof (str2) != 'string') return false;

    const string1 = str1.toUpperCase();
    const string2 = str2.toUpperCase();

    if (string1 === string2) return false;

    return string1.split('').sort().join() === string2.split('').sort().join();

}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false