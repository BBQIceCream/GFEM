/* const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели,', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько вы его оцените?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько вы его оцените?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */

"use strict";

let a = +prompt('Введите первое число', '');
let b = +prompt('Введите второе число', '');
let operator = prompt('Выберите оператор: + , - , / , * ', '');
const isNotValid = !operator || isNaN(a) || isNaN(b) || typeof a !== 'number' || typeof b !== 'number';

// Вызываем alert, внутрь передаем вызов функции calc()
alert( calc(a, b, operator) );

function calc(a, b, operator) {
  

  if (isNotValid) {
      return 'error';
  }

  switch (operator) {
      case '+':
        return a + b;

      case '-':
          return a - b;

      case '*':
          return a * b;

      case '/':
          return a / b;
    
       default:
          alert('error');
          break;
  }
}