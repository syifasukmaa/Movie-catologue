import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import FavoriteMovieSearchView from './liked-movies/favorite-movie-search-view';
import FavoriteMovieShowPresenter from './liked-movies/favorite-movie-show-presenter';
import FavoriteMovieSearchPresenter from './liked-movies/favorite-movie-search-presenter';
import { createMovieItemTemplate } from '../templates/template-creator';

const view = new FavoriteMovieSearchView();

const Like = {
  async render() {
    return view.getTemplate();
    // return `
    //   <div class="content">
    //     <h2 class="content__heading">Your Liked Movie</h2>
    //     <div id="movies" class="movies">
    //     </div>
    //   </div>
    // `;
  },

  async afterRender() {
    // const movies = await FavoriteMovieIdb.getAllMovies();
    // const moviesContainer = document.querySelector('#movies');
    
    // movies.forEach((movie) => {
    //   moviesContainer.innerHTML += createMovieItemTemplate(movie);
    // });
    new FavoriteMovieShowPresenter({ view, favoriteMovies: FavoriteMovieIdb });
    new FavoriteMovieSearchPresenter({ view, favoriteMovies: FavoriteMovieIdb });
  },
};

export default Like;
