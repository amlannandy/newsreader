import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const NewsItem = (props) => {
  const article = props.article;
  const viewDetails = props.onClick;

  return (
    <TouchableOpacity onPress={viewDetails} style={styles.card}>
      <ImageBackground
        style={styles.image}
        source={{ uri: article.urlToImage }}
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>{article.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 15,
  },
  image: {
    height: 200,
    width: '100%',
    flexDirection: 'column-reverse',
    borderRadius: 15,
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: 'black',
    opacity: 0.7,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: {
    fontFamily: 'open-sans',
    color: 'white',
  },
});

export default NewsItem;
