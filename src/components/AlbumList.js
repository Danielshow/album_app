import React, { Component } from 'react';
import { View, Text } from "react-native";
import axios from "axios";

class AlbumList extends Component {
  state = {
    albums: [],
  };

  async componentDidMount() {
    const album = await axios.get(
      "https://rallycoding.herokuapp.com/api/music_albums"
    );
    this.setState({
      albums: album.data,
    });
  }
  render() {
    const albumList = this.state.albums.map(album => {
      return (
        <View key={album.title}>
          <Text>{album.title}</Text>
          <Text>{album.artist}</Text>
          <Text>{album.url}</Text>
          <Text>{album.image}</Text>
        </View>
      );
    });

    return (
      <View>
        <Text> AlbumList </Text>
        {albumList}
      </View>
    );
  }
}

export default AlbumList;
