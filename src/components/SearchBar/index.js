import React, { Component } from 'react';
import './searchbar.css';

class SearchBar extends Component {
  state = {
    input: ''
  }

  search = event => {
    const input = event.target.value
    this.setState({input})
  }

  render() {
    return (
      <form action="">
        <input type="text"
          placeholder="Try Los Angeles"
          value= {this.state.input}
          onChange ={this.search}
      />
      </form>
    )
  }
}

export default SearchBar;