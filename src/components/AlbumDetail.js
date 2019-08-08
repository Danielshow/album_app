import React from "react";
import { View, Text, Image } from "react-native";
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle} >
          <Image source={{ uri: album.thumbnail_image }} style={styles.thumbnailStyle} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>
            {album.title} 
          </Text>
          <Text>
            { album.artist}
          </Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{uri: album.image}} style={styles.imageStyle} />
      </CardSection>
    </Card>
  );
};

const styles = {
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  
  textStyle: {
    fontSize: 18,
  },

  thumbnailStyle: {
    width: 50,
    height: 50,
  },

  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  imageStyle: {
    width: '100%',
    height: 300,
  }
}

export default AlbumDetail;
