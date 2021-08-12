import { handleSubmit, searchMovie } from './fetchMovies';
import { initSortable } from './plugins/init_sortable';
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))

const form = document.getElementById('search-form');

// Escutar o submit do form (click no search ou enter no input)
form.addEventListener('submit', handleSubmit);

searchMovie('Harry Potter');

initSortable();