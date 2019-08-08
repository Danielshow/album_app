import React from "react";
import { View, Text } from "react-native";
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  return (
    <Card>
      <CardSection>
        <View>

        </View>
        <View style={styles.textContainer}>
          <Text>
            {album.title} 
          </Text>
          <Text>
            { album.artist}
          </Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  }
}
export default AlbumDetail;
