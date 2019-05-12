import React, { Component, Fragment } from 'react';
import database from '../config';

class Statistics extends Component {
  state = {
    likes: null,
    dislikes: null
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    let likeQuery = database
      .ref('/images')
      .orderByChild('likes')
      .limitToLast(1);

    let dislikeQuery = database
      .ref('/images')
      .orderByChild('dislikes')
      .limitToLast(1);

    likeQuery.on('value', like => {
      dislikeQuery.on('value', dislike => {
        let newData = {
          likes: this.serializeData(like),
          dislikes: this.serializeData(dislike)
        };

        this.setState({ ...newData });
      });
    });
  };

  serializeData(data) {
    return Object.values(data.val())[0];
  }

  render() {
    const { likes, dislikes } = this.state;

    return (
      <Fragment>
        {likes && dislikes ? (
          <div className="card-deck">
            <div className="card">
              <div className="card-header">
                <h1 className="card-title">The most liked photo</h1>
                <h4 className="card-text">{likes.title}</h4>
              </div>
              <img src={likes.imageURL} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="text-success">Liked: {likes.likes}</p>
                <p className="text-danger">Disliked: {likes.dislikes}</p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h1 className="card-title">The most disliked photo</h1>
                <h4 className="card-text">{dislikes.title}</h4>
              </div>
              <img src={dislikes.imageURL} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="text-success">Liked: {dislikes.likes}</p>
                <p className="text-danger">Disliked: {dislikes.dislikes}</p>
              </div>
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </Fragment>
    );
  }
}

export default Statistics;
