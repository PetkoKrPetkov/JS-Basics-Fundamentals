function demo(input) {
  let movies = [];

  input.forEach(line => {

    if(line.includes("addMovie ")) {
        let name = line.split("addMovie ")[1];
        movies.push({name});
    } else if (line.includes(" directedBy ")) {
        let [name, director] = line.split(" directedBy ");

        let movie = movies.find( m => m.name === name);

        if(movie) {
            movie.director = director;
        }
    } else if (line.includes(" onDate ")) {
        let [name, date] = line.split(" onDate ");

        let movie = movies.find( m => m.name === name);

        if(movie) {
            movie.date = date;
        }
    }

  });

  movies.forEach(movie => {
    if(movie.name && movie.director && movie.date) {
        console.log(JSON.stringify(movie));
    }
    })

}
demo([
  'addMovie The Avengers',
  'addMovie Superman',
  'The Avengers directedBy Anthony Russo',
  'The Avengers onDate 30.07.2010',
  'Captain America onDate 30.07.2010',
  'Captain America directedBy Joe Russo',
]);
