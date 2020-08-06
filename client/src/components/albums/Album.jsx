import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneAlbum } from '../../services/apiAlbums';
import './Album.css';

export default function Album() {
  const [album, setAlbum] = useState(null);
  const [track, setTracks] = useState([]);
  let params = useParams();

  useEffect(() => {
    getAlbumInfo();
  }, []);

  const getAlbumInfo = async () => {
    try {
      let { id } = params;
      console.log(id);
      const response = await getOneAlbum(id);
      console.log(response.tracks);
      setAlbum(response);
      setTracks(response.tracks);
    } catch (error) {
      console.log(error);
    }
  };

  if (album === null) {
    return <h1>Loading...</h1>
  } else {
    return (
      <div className='main-container'>
        <div className='first-container'>
          <img className='album-image' src={album.albumCover} alt={album.albumName} />
          <div className='description'>
            <p className='albumName'>{album.albumName}</p>
            <p className="desc-text artist">Artist: {album.artistName}</p>
            <p className="desc-text">Genre: {album.genre}</p>
            <p className="desc-text">year: {album.year}</p>
            <p className='album-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quas tempora, commodi nobis
              odio natus aliquam voluptatum atque totam voluptas beatae suscipit tempore minima
              corrupti facere alias ad vero maiores.
          </p>
            <p className='album-price'>${album.price}</p>
          </div>
        </div>
        <button className='add-to-cart-button'>Add to Cart</button>
        <div className='second-container'>
          <div className="second-wrapper">
          <div className="album-details">
            <p className="trackNum">Track #</p>
            <p className="trackName">Track Name</p>
            <p className="trackLength">Length</p>
          </div>
          {album.tracks.map(track => (
            <div className='track-info'>
              <p>{track.trackNumber}</p>
              <br/>
              <p>{track.songTitle}</p>
              <br/>
              <p>{track.length}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    );
  }
}
