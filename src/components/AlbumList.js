import React, { Component } from "react";
import { Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
  state = {
    albums: []
  };

  async componentDidMount() {
    const album = await axios.get(
      'https://rallycoding.herokuapp.com/api/music_albums'
    );
    this.setState({
      albums: album.data
    });
  }
  render() {
    const albumList = this.state.albums.map(album => {
      return <AlbumDetail key={album.title} album={album} />;
    });

    return (
      <ScrollView style={styles.overallStyle}>
        {albumList}
      </ScrollView>
    );
  }
}

const styles = {
  overallStyle: {
    marginBottom: 20,
  }
}

export default AlbumList;
