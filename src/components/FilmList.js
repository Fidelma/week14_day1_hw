import React, {Component} from 'react';
import Film from './Film.js';
import '../FilmList.css'

class FilmList extends Component {
  render(){
    const filmNodes = this.props.films.map((film) => {
      return (
        <Film key={film.id} name={film.name} link={film.url}/>
      )
    })

    return (
      <>
      <div className="heading">
      <h1>Upcoming Film Releases for the UK</h1>
      </div>
      <div className="films">
      {filmNodes}
      <div id="releases-button">
      <a className="button" href=" https://www.imdb.com/calendar/?region=gb">View more upcoming releases >> </a>
      </div>
      </div>
      </>
    );
  }
}

export default FilmList;
