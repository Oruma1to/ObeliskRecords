import React, { useState } from 'react'
import { createAlbum } from '../../../services/apiAlbums'
import './CRUD.css'



export default function CreateAlbum() {
  // check if user is logged in and an admin 
  // required album states are albumName, artistName, year, genre, albumCover, tracks = [{trackNumber, songTitle, length}]

  const [update, setUpdate] = useState(true)
  const forceUpdate = () => setUpdate(!update)

  const [albumName, setAlbumName] = useState('')
  const [artistName, setArtistName] = useState('')
  const [year, setYear] = useState(2000)
  const [price, setPrice] = useState(10.99)
  const [genre, setGenre] = useState('')
  const [albumCover, setAlbumCover] = useState('')
  const [tracks, setTracks] = useState([])
  const [songTitle, setSongTitle] = useState('')
  const [length, setLength] = useState('0:00')


  // methods to add and remove tracks in editor (local state only)
  const addTrack = () => {
    tracks.push({
      trackNumber: tracks.length + 1,
      songTitle, length
    })
    setTracks(tracks)
    forceUpdate()
  }

  // remove via index 
  const removeTrack = (ind) => {
    try {
      tracks.splice(ind, 1)
      tracks.forEach((track, ind) => {
        track.trackNumber = ind + 1
      })
      setTracks(tracks)
    } catch (error) {
      console.log(error)
    }
    forceUpdate()
  }

  // function for submitting form to create 
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await createAlbum({
        albumName, artistName, year, price, genre, albumCover, tracks
      })

      console.log(response)

      formReset()
    } catch (error) {
      console.log(error)
    }
  }

  const formReset = () => {
    // reset the form 
    setAlbumName('')
    setArtistName('')
    setYear(2000)
    setGenre('')
    setAlbumCover('')
    setTracks([])
    setSongTitle('')
    setLength('0:00')
  }

  return (
    <div className="edit-container">
      <div className="edit-wrapper">

        <form onSubmit={handleSubmit}>

          <label htmlFor="albumName">Album Name</label>
          <input name="albumName"
            type="text"
            value={albumName}
            onChange={e => setAlbumName(e.target.value)}
          />

          <label htmlFor="artistName">Artist Name</label>
          <input name="artistName"
            type="text"
            value={artistName}
            onChange={e => setArtistName(e.target.value)}
          />

          <label htmlFor="year">Year</label>
          <input name="year"
            type="number"
            value={year}
            onChange={e => setYear(e.target.value)}
          />

          <label htmlFor="genre">Genre</label>
          <input name="genre"
            type="text"
            value={genre}
            onChange={e => setGenre(e.target.value)}
          />

          <label htmlFor="price">Price</label>
          <input name="price"
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />

          {/* preview image url to make sure it shows */}
          <section className="editSection">
            {
              albumCover ? (
                <img className="testImage"
                  alt="test the url used for album cover"
                  src={albumCover}
                />
              ) : <h5>No album cover chosen</h5>
            }

            <label htmlFor="albumCover">Album Cover (Image URL)</label>
            <input name="albumCover"
              type="text"
              value={albumCover}
              onChange={e => setAlbumCover(e.target.value)}
            />
          </section>

          {/* show existing tracks  */}
          {tracks.length > 0 ? <h3>Current Tracks</h3> : null}
          {
            tracks.map((track, ind) => {
              return (
                <section className="editSection" key={ind}>
                  <p>Track number: {track.trackNumber}</p>
                  <p>Song title: {track.songTitle}</p>
                  <p>Song Length: {track.length}</p>
                  <button type="text" onClick={() => removeTrack(ind)}>Remove Track?</button>
                </section>
              )
            })
          }
          <div className="add-track"> 
          <h3>Add a track</h3>
          <section className="editSection">
            <label>Track Number: {tracks.length + 1}</label>

            <label htmlFor="songTitle">Song Title</label>
            <input name="songTitle"
              type="text"
              value={songTitle}
              onChange={e => setSongTitle(e.target.value)}
            />

            <label htmlFor="length">Song Length</label>
            <input name="length"
              type="text"
              value={length}
              onChange={e => setLength(e.target.value)}
            />

            <button type="button" onClick={addTrack}>Add Song</button>
          </section>
          </div>
          <button>Submit</button>
        </form>

      </div>
    </div>
  )

}
