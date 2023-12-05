//this of objects's

const movie1 = {
  title: 'The Avengers',
  year: 2012,
  genre: 'Action, Sci-Fi, Thriller',
  cast: {
    main_lead: 'Robert Downey Jr.',
    others: 'Chris Evans',
  },

  getDetails() {
    console.log(`
      Title: ${this.title}
      Year: ${this.year}
      Genre: ${this.genre}
      Cast: ${this.cast}
      `);
  },
};

movie1.getDetails();

const movie2 = {
  title: 'Superman',
  year: 2018,
  genre: 'Action, Sci-Fi, Thriller',
  cast: {
    main_lead: 'Chritopher, Daniel',
    others: 'Chris Evans',
  },

  getDetails() {
    console.log(`
      Title: ${this.title}
      Year: ${this.year}
      Genre: ${this.genre}
      Cast: ${this.cast}
      `);
  },
};

movie2.getDetails();






//   getMovieDetails: function (detail) {
//     console.log(movie[detail]);
//   }
// };

// console.log(movie.title);
// movie.getDetails();
// const detail = 'year';

// movie.getMovieDetails(detail);

// console.log(movie.cast.main_lead);


