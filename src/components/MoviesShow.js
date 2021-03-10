import React from 'react'

const MovieShow = ({match, movies}) => {
    // console.log("Match", match, "Movies", movies)
    return (
        <div>
            <h3>{ movies[match.params.movieId].title}</h3>
        </div>
    )
}

export default MovieShow