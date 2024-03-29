import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneAlbum } from '../../services/apiAlbums';
import { useSelector } from 'react-redux';
import './Album.css';
import AddItem from '../shoppingCart/AddItem';

export default function Album() {
  const [album, setAlbum] = useState(null);
  // const [track, setTracks] = useState([]);
  let params = useParams();
  const isLogged = useSelector(state => state.isLogged);

  useEffect(() => {
    getAlbumInfo();
  }, []);

  const getAlbumInfo = async () => {
    try {
      let { id } = params;
      const response = await getOneAlbum(id);
      setAlbum(response);
    } catch (error) {
      console.log(error);
    }
  };

  let admin_key = false;

  if (isLogged) {
    admin_key = isLogged.user.admin_key;
  }

  if (album === null) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className='main-container'>
        <div className='first-container'>
          <img className='album-image' src={album.albumCover} alt={album.albumName} />
          <div className='description'>
            <p className='albumName'>{album.albumName}</p>
            <p className='desc-text artist'>Artist: {album.artistName}</p>
            <p className='desc-text'>Genre: {album.genre}</p>
            <p className='desc-text'>year: {album.year}</p>
            <p className='album-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quas tempora, commodi
              nobis odio natus aliquam voluptatum atque totam voluptas beatae suscipit tempore
              minima corrupti facere alias ad vero maiores.
            </p>
            <p className='album-price'>${album.price}</p>
          </div>
        </div>
        <AddItem album={album} />
        {admin_key ? (
          <Link to={`/editalbum/${album._id}`} >
            <button className='add-to-cart-button'>Edit Album</button>
          </Link>
        ) : null}
        <div className='second-container'>
          <div className='second-wrapper'>
            <div className='album-details'>
              <p className='trackNum'>Track #</p>
              <p className='trackName'>Track Name</p>
              <p className='trackLength'>Length</p>
            </div>
            {album.tracks.map(track => (
              <div key={ track.trackNumber} className='track-info'>
                <p>{track.trackNumber}</p>
                <br />
                <p>{track.songTitle}</p>
                <br />
                <p>{track.length}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
