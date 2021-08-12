const moviesList = document.getElementById('movies-list');

const insertMovieInList = (movie) => {
  // Iterando por cada elemento do Array (movie)

  // item é o HTML do <li>
  const item = `<li>
                  <img src='${movie.Poster}' height='160'>
                </li>`;

  // Insere uma nova <li> item dentro do moviesList <ul>
  moviesList.insertAdjacentHTML('beforeend', item);
};

const handleFetchResponse = (data) => {
  // Dentro deste callback temos o data que é a resposta da API
  const movies = data.Search; // Na resposta temos a chave Search que é um array
  movies.forEach(insertMovieInList);
};

const searchMovie = (keyword) => {
  // Interpolando o keyword com a URL da API
  const url = `https://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;

  // Limpa todos os <li> para começar uma nova exibição dos movies
  moviesList.innerHTML = '';

  fetch(url) //Faz o request HTTP do tipo GET
    .then(response => response.json())  // Converte a resposta em JSON
    .then(handleFetchResponse);
}

const handleSubmit = (event) => {
  // Este callback é chamado somente quando ocorre o submit
  event.preventDefault(); // Para não dar reload na página

  // Pegamos o valor digitado no input de text (NÃO ESQUECER DO .value NO FINAL)
  const keyword = document.getElementById('keyword').value;

  searchMovie(keyword)
};

export { handleSubmit, searchMovie };