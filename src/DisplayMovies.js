import React, {Component} from 'react';

class DisplayMovies extends Component { 
	render() {
    
    const profiles = this.props.profiles;
    const users = this.props.users;
    const movies = this.props.movies;    
    
    const favoriteMovies = new Set([]);
    const noFavoriteMovies = new Set([]);
      
    profiles.map(profile => {    	
        favoriteMovies.add(movies[profile.favoriteMovieID].name);
    });
      
    for (const [key, value] of Object.entries(movies)) {    	
        favoriteMovies.has(value.name) ? console.log('YES') : noFavoriteMovies.add(value.name);
    }   

    console.log(favoriteMovies);
    console.log(noFavoriteMovies);
      
    return (
    	<ol>
        
        </ol>
    )
    } 
}

export default DisplayMovies;

