'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '0');

const personalMovieDB = {
    coutn: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько вы его оцените?', '');
    if ( a != '' && b != '' && a.length < 50 && a != null && b != null ) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

//  let i = 0;
// while ( i < 2 ) {
//     i++;
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько вы его оцените?', '');
//     if ( a != '' && b != '' && a.length < 50 && a != null && b != null ) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
// }

// do {
//     i++;
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько вы его оцените?', '');
//     if ( a != '' && b != '' && a.length < 50 && a != null && b != null ) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
// } while ( i < 2 );

if (personalMovieDB.coutn < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.coutn >= 10 && personalMovieDB.coutn < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.coutn >=30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);