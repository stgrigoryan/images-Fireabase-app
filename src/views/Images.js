import React, { Component } from 'react';
import ImageBlock from '../components/ImageBlock';
import database from '../config';

class Images extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const snapshot = await database.ref('/images').once('value');
    const res = snapshot.val();
    const data = this.serializeData(res);
    this.setState({ data });
  };

  serializeData(data) {
    let arr = [];
    for (let key in data) {
      arr.push({
        id: key,
        ...data[key]
      });
    }
    return arr;
  }

  render() {
    const {
      state: { data },
      getData
    } = this;

    return (
      <div className="card-deck">
        {data &&
          data.map(image => (
            <ImageBlock getData={getData} key={image.id} image={image} />
          ))}
      </div>
    );
  }
}

export default Images;
