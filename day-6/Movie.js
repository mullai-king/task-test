class Movie{
  constructor(tittle,studio,rating = "PG"){
      this.tittle = tittle;
      this.studio = studio;
      this.rating = rating;
  }
   static getPG(movie){
      let pgMovies =[];
      movie.filter((movie)=>{
        if(movie.rating ==="PG"){
          pgMovies.push(movie.tittle);
        }
      })
      return pgMovies;
  }
}

let sampleMovie = new Movie("Casino Royale","Eon Productions","PG13");

let movieList = [
  new Movie("Leo","Seven Screen Studio","PG13"),
  new Movie("vikram","Seven Screen Studio","PG"),
  new Movie("Kaithi","Seven Screen Studio","PG"),
  new Movie("Resticted","Seven Screen Studio","R"),
  new Movie("IronMan","Seven Screen Studio")]
  // for(var x in movieList){
  let pgResult = Movie.getPG(movieList)
  console.log(pgResult)
// }