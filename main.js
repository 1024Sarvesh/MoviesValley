



const options = {
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
        AEl.innerHTML = element.name;
        AEl.href = "#"
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



const GetupcomingNow = async () => {
  const res = await fetch("https://api.themoviedb.org/3/movie/upcoming", options);
  const data = await res.json();

  const movies = data.results;
  // console.log(movies)
  const TMDB_IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  const ContainerEl = document.querySelector("#img-con");
  const PosterEl = document.querySelector("#poster-con")

  const imgEl = document.createElement("img");





  ContainerEl.appendChild(imgEl);

  // let index = 0;

  //   function changeBanner() {
  //     imgEl.src = TMDB_IMAGE_PATH + movies[index].backdrop_path;
  //     index = (index + 1) % movies.length;
  //   }

  //   changeBanner(); 
  //   setInterval(changeBanner, 3000); 

  imgEl.src = TMDB_IMAGE_PATH + movies[0].backdrop_path;




  movies.forEach((movie) => {
    const poster = document.createElement("img");
    poster.src = TMDB_IMAGE_PATH + movie.poster_path;
    // console.log(movie.title)


    poster.addEventListener("click", () => {
      imgEl.src = TMDB_IMAGE_PATH + movie.backdrop_path;

    });


    PosterEl.appendChild(poster);
  });


};

const GetNowPlaying = async (path,id) => {
  const res = await fetch("https://api.themoviedb.org/3/movie/now_playing", options);
  const data = await res.json()
  const TMDB_IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  data.results.forEach(element => {
    console.log(element)
    const NowPlayingEl = document.querySelector("#NowPlaying")

    const DivEl = document.createElement("div")
    const NowPlayingImgEl = document.createElement("img")
    NowPlayingImgEl.src = TMDB_IMAGE_PATH + element.poster_path


    const OverlayEl = document.createElement("div")
    OverlayEl.classList.add("overlay")
    const h2El = document.createElement("h2")
    const pEl = document.createElement("p")
    h2El.innerText = element.title
    pEl.innerText = element.overview


    OverlayEl.appendChild(h2El)
    OverlayEl.appendChild(pEl)


    DivEl.appendChild(NowPlayingImgEl)
    DivEl.appendChild(OverlayEl)
    NowPlayingEl.appendChild(DivEl)
  })
}


window.addEventListener("load", () => {
  GetData()
  GetupcomingNow()
  GetNowPlaying()
})
