import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import axios from '../axios'
import { imgUrl, API_KEY } from '../constance/Constance'
import './Rowpost.css'
function Rowpost({props}) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')

  useEffect(() => {
    axios.get(props.url).then((responce) => {
 
      setMovies(responce.data.results)
    })
  },[] );
  const opts = { 
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }
  const handleMovie = (id) => {
    console.log(id);

    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0])
      } else {
        console.log("array is empty");
      }
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>

        {movies.map((obj) => {
          return ( 

            <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imgUrl + obj.backdrop_path}`} alt="poster" />

          )
        })}



      </div>

      {urlId && <YouTube opts={opts} videoId={urlId.key} />}

    </div>
  )
}

export default Rowpost



