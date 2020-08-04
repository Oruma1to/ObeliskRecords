import React, { useState, useEffect } from 'react';
import { getAlbums } from '../../services/apiAlbums';
import { Link } from 'react-router-dom';
import './Albums.css';

export default function Albums() {
  const [albums, setAlbums] = useState([]);

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
  };
  return (
    <>
      {albums.map(album => {
        return (
          <div key={album.id}>
            <Link className='album-container' to={`/albums/${album._id}`}>
              <img className='album-cover' src={album.albumCover} />
              <p className='album-title'>{album.artistName}</p>
              <p className='album-name'>{album.albumName}</p>
              <p className='album-year'>{album.year}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
}
