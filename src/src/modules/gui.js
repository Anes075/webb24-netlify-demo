function displayMovies(moviesArray){
    const container = document.querySelector('#moviesContainer');
    container.innerHTML = '';

    for(const movie of moviesArray){
       // console.log(movie);

        const movieDiv = document.createElement('div');
        const titleEl = document.createElement('h2');
        const infoEl = document.createElement('p');

        titleEl.innerText = movie.name;
        infoEl.innerText = `${movie.year}, ${movie.director}, ${movie.genre}`;

        movieDiv.append(titleEl, infoEl);
        container.append(movieDiv);
    }
}

export {displayMovies};