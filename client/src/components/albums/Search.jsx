import React, { Component } from 'react'
import { searchBar } from '../../services/apiAlbums'
import './Search.css'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  handleSearch = async (e) => {
    e.preventDefault()
    try {
      const response = await searchBar(this.state.search)
      this.props.setAlbums(response)
      this.setState({ search: '' })
      this.props.setCanReset(true)
    } catch (error) {
      console.log(error)
    }
  }


  render() {
    return (
      <div className="search-bar-container" >
        <form
          className="search-bar"
          onSubmit={this.handleSearch}
        >
          <input
            className="search-input"
            name="Search"
            placeholder="Search For An Album..."
            type="text"
            autoFocus
            value={this.state.search}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}
