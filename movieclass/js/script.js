class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

const movies = [
    new Movie("Casino Royale", "Eon Productions", "PG-13"),
    new Movie("Iron man", "Marvel", "PG"),
    new Movie("Inception", "Warner Bros."),
    new Movie("Toy Story", "Pixar", "R"),
    new Movie("Shutter Island", "Paramount", "R"),
    new Movie("Salt", "Columbia Pictures", "PG-13")
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies);
