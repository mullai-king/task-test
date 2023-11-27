class Movie{
  constructor(tittle,studio,rating = "PG"){
      this.tittle = tittle;
      this.studio = studio;
      this.rating = rating;
  }
   static getPG(movie){
   return movie.filter((movie)=>movie.rating ==="PG")   
  }
}

var sampleMovie = new Movie("Casino Royale","Eon Productions","PG13");

var movieList = [
  new Movie("Leo","Seven Screen Studio","PG13"),
  new Movie("vikram","Seven Screen Studio","PG"),
  new Movie("Kaithi","Seven Screen Studio","PG"),
  new Movie("Resticted","Seven Screen Studio","R"),
  new Movie("IronMan","Seven Screen Studio")]
  // for(var x in movieList){
  var pgResult = Movie.getPG(movieList)
console.log(pgResult)
// }