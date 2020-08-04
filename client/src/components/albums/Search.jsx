import React, { Component } from 'react'
import './Search.css'

export default class Search extends Component {
  render() {
    return (
      <div className="search-bar-container" >
        <form className="search-bar">
          <input
            className="search-input"
            name="Search"
            placeholder="Search For An Album..."
            type="text"
            autoFocus
          />
        </form>
      </div>
    )
  }
}
