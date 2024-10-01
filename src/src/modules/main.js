import { addMovie, getAllMovies } from "./moviesrequest.js";
import { displayMovies } from "./gui.js";

const form = document.querySelector('form');


getAllMovies().then(displayMovies);

form.addEventListener('submit', event =>{
    event.preventDefault();

    const name = document.querySelector('#title').value;
    const director = document.querySelector('#director').value;
    const genre = document.querySelector('#genre').value;
    const year = document.querySelector('#year').value;

    const movieToAdd = {name, director, genre, year};
    addMovie(movieToAdd);
})