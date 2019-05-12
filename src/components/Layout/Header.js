import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-dark">
          <img
            src="https://cdn-images-1.medium.com/max/1600/1*AoarrKQjCE0zVJkxl9za8Q.jpeg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        <div>
          <button
            className="btn btn-sm btn-outline-warning my-2 my-sm-0 mr-1"
            type="submit"
          >
            <Link to="/">Images</Link>
          </button>
          <button
            className="btn btn-sm btn-outline-info my-2 my-sm-0"
            type="submit"
          >
            <Link to="/statistics">Statistics</Link>
          </button>
        </div>
      </nav>
    );
  }
}

export default Header;
