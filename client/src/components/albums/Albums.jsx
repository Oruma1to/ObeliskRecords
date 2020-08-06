import React, { useState, useEffect } from 'react'
import { getAlbums } from '../../services/apiAlbums'
import { Link } from 'react-router-dom'
import Search from './Search'
import './Albums.css'


export default function Albums() {
  const [albums, setAlbums] = useState([]);
  const [canReset, setCanReset] = useState(false)

  useEffect(() => {
    pullAlbums();
  }, []);

  const pullAlbums = async () => {
    try {
      const response = await getAlbums();
      console.log(response);
      setAlbums(response);
    } catch (error) {
      console.log(error);
      this.setState({
        status: error.message || 'Failed to load albums.',
      });
    }
  }

  const handleReset = async () => {
    pullAlbums()
    setCanReset(false)
  }

  return (
    <>
      <div className="home-search"><Search setCanReset={setCanReset} setAlbums={setAlbums} /></div>
      <div className="albums-container">

        {albums.map(album => {
          return <div key={album.albumName}>
            <Link className="album-container" to={`/albums/${album._id}`}>
              <img className="album-cover" src={album.albumCover} alt={album.albumName} />
              <p className="album-title aText">{album.artistName}</p>
              <p className="album-name aText">{album.albumName}</p>
              <p className="album-year aText">{album.year}</p>
            </Link>
          </div>
        })}
        {canReset
          ?
          <button
            onClick={handleReset}
          >Reset</button>
          :
          null
        }
      </div>
    </>
  )
}
