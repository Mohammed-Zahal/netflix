import { useEffect, useState } from 'react'
import { API_KEY, imgUrl } from '../../constance/Constance'
import axios from '../../axios'
import './Banner.css'
// type Param = { 
//   language: string;
//   api_key:string;
//   length?: String;
// }
 
function Banner() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    axios.get('trending/all/week', {
      params: {
        lanuage: "en-US",
        api_key: API_KEY
      }
    }).then((responce) => {
      setMovie(responce.data.results[Math.floor(Math.random() * responce.data.results.length - 1)])
    })
  }, [])
  // function truncate(str, n) { 
  //   return str?.length > n ? str.substr(0, n - 1) + "..." : str
  // }
  return (
    <div
      style={{ backgroundImage: `url(${movie ? imgUrl + movie.backdrop_path : ""})` }}
      className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : ""}</h1>


        <div className='banner_button'>

          <button className='button'>Play</button>
          <button className='button'>My List</button>

        </div>
        <div className='discription'>

          <p className='overview'>{movie ? movie.overview : ""}</p>


        </div>
        <div className="fade_bottom">
        </div>

      </div>
    </div>
  )
}

export default Banner
