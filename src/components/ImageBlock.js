import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import database from '../config';

import {
  faThumbsDown,
  faThumbsUp,
  faSmile
} from '@fortawesome/free-solid-svg-icons';

library.add(faThumbsDown, faThumbsUp, faSmile);

class ImageBlock extends Component {
  handleClick = async (type, imageName) => {
    const { getData } = this.props;
    let query = database
      .ref('images')
      .orderByChild('imageURL')
      .equalTo(imageName);

    const snapshot = await query.once('child_added');

    let value;
    switch (type) {
      case 'like':
        value = 'likes';
        break;
      case 'neutral':
        value = 'neutral';
        break;
      case 'dislike':
        value = 'dislikes';
        break;
      default:
        break;
    }
    let valueForUpdate = ++snapshot.val()[value];
    snapshot.ref.update({ [value]: valueForUpdate });
    getData();
  };

  render() {
    const { imageURL: src, title, likes, neutral, dislikes } = this.props.image;

    return (
      <div className="col-sm-3">
        <div className="card mb-3">
          <img src={src} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>
          <div className="card-footer">
            <button
              onClick={e => this.handleClick('like', src)}
              type="button"
              className="btn btn-sm btn-outline-primary mr-1"
            >
              <FontAwesomeIcon icon="thumbs-up" /> {likes}
            </button>
            <button
              onClick={e => this.handleClick('neutral', src)}
              type="button"
              className="btn btn-sm btn-outline-secondary mr-1"
            >
              <FontAwesomeIcon icon="smile" /> {neutral}
            </button>
            <button
              onClick={e => this.handleClick('dislike', src)}
              type="button"
              className="btn btn-sm btn-outline-danger"
            >
              <FontAwesomeIcon icon="thumbs-down" /> {dislikes}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageBlock;
