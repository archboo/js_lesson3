'use strict';

let arrExample1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //объявили массив

for (let i = 0; i < arrExample1.length; i++) { //цикл работает до достижения длинны массива
    if (i % 2 == 1) { //остаток от деления
        console.log(i + " - Это нечетное число")
    } else if (i == 0) {
        console.log(i + " - Это ноль")
    } else {
        console.log(i + " - Это четное число")
    }
};
