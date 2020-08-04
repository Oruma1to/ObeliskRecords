import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneAlbum } from '../../services/apiAlbums';
import './Album.css';

export default function Album() {
  const [album, setAlbum] = useState([]);
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
  return (
    <div className='main-container'>
      <div className='first-container'>
        <img className='album-image' src={album.albumCover} alt={album.albumName} />
        <div className='description'>
          <h1 className='albumName'>{album.albumName}</h1>
          <h3>Artist: {album.artistName}</h3>
          <h3>Genre: {album.genre}</h3>
          <h3>year: {album.year}</h3>
          <p className='album-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quas tempora, commodi nobis
            odio natus aliquam voluptatum atque totam voluptas beatae suscipit tempore minima
            corrupti facere alias ad vero maiores.
          </p>
          <h3 className='album-price'>Price: $10.99</h3>
        </div>
      </div>
      <button className='add-to-cart-button'>Add to Cart</button>
      <div className='second-container'>
        <h3>Track Sample</h3>
        {album.tracks
          ? album.tracks.map(track => (
              <div className='track-info'>
                <h4> Track : {track.trackNumber}</h4>
                <h4>Track Name: {track.songTitle}</h4>
                <h4> length: {track.length}</h4>
              </div>
            ))
          : ''}
      </div>
    </div>
  );
}
