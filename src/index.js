const moviesList = document.getElementById('movies-list');
const form = document.getElementById('search-form')


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const keyword = document.getElementById('keyword').value;
  const url = `https://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;

  moviesList.innerHTML = '';

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const movies = data.Search;
      movies.forEach((movie) => {
        // console.log(movie.Title);

        const item = `<li>
                        <h4>${movie.Title} (${movie.Year})</h4>
                        <img src='${movie.Poster}'>
                      </li>`;

        moviesList.insertAdjacentHTML('beforeend', item);
      });
    });
});
