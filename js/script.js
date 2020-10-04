// alert ("privet");
// let answer = prompt('Тут задаем вопрос', 'значение по умолчанию');
// console.log( typeof(answer) );

// const answers = [];
// answers[99] = 1;
// console.log(answers.length);

// let incr = 10,
//     decr = 10;
 
// console.log(incr++, decr--);

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '0');


const personalMovieDB = {
    coutn: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = +prompt('На сколько вы его оцените?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = +prompt('На сколько вы его оцените?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB.movies);