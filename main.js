

export const TMDB_IMAGE_PATH = "https://image.tmdb.org/t/p/original";
export const TMDB_BASE_URL = "https://api.themoviedb.org/3"

 export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjkwZmM3MzNhZjg2YTZiOTZmNDZjNTI3MGYyNGY0ZiIsIm5iZiI6MTc4MzQ3NTY5My4xMDQsInN1YiI6IjZhNGRhZGVkOTU5NWJkZTAyM2M4MDgxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d_m96hhELSRR4JF-pn88B8YsDqHDjA2J4ZP38_9P-2M'
  }
};



const GetData = () => {
  fetch("https://api.themoviedb.org/3/genre/movie/list", options).then((res) => {
    const MovieListEl = document.querySelector("#MovieTypes")
    res.json().then((data) => {
      data.genres.forEach(element => {
        // console.log(element)
        const AEl = document.createElement("a")
        AEl.href = `/genres.html?mid=${element.id}&gname=${element.name}`
        AEl.innerHTML = element.name;
        MovieListEl.appendChild(AEl)
      });
    }).catch((err) => {
      return new Error(res.status);
      console.log(err)
    })
  }).catch((err) => {
    return new Error(res.status);
    console.log(err)
  })
}





window.addEventListener("load", () => {
  GetData()
})
