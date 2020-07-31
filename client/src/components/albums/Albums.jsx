import React, { Component } from 'react'

import { getAlbums } from '../../services/apiAlbums'

export default class Albums extends Component {
  constructor() {
    super()

    this.state = {
      albums: [],
      status: 'Loading...'
    };
  } 

  async componentDidMount() {
    try {
      const response = await getAlbums();

      console.log(response)

      this.setState({
        status: '',
        albums: response 
      })
    } catch (error) {
      console.log(error);
      this.setState({
        status: error.message || 'Failed to load albums.'
      })
    }
  }

  render() {
    return (
      <div>
        { this.state.status ? <h2>{this.state.status}</h2> : null}
        {
          this.state.albums.map((album, ind) => {
            return <p key={ind}>{album.albumName}</p>
          })
        }
      </div>
    )
  }
}
