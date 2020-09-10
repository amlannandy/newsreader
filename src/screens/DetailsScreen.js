import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const DetailsScreen = ({ navigation, route }) => {
  const article = route.params.article;

  const openLink = () => {
    navigation.navigate({
      name: 'webview',
      params: { link: article.url },
    });
  };

  return (
    <View style={styles.screen}>
      <View>
        <Image style={styles.image} source={{ uri: article.urlToImage }} />
        <View style={{ padding: 10 }}>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.subtitle}>{article.author}</Text>
          <Text style={styles.subtitle}>
            Published at: {article.publishedAt}
          </Text>
          <Text style={styles.content}>{article.description}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={openLink}>
        <Text style={styles.buttonText}>Read More...</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    color: 'black',
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    paddingVertical: 10,
  },
  subtitle: {
    color: 'grey',
    fontFamily: 'open-sans',
    fontSize: 12,
  },
  content: {
    color: 'black',
    opacity: 0.8,
    fontFamily: 'open-sans',
    fontSize: 14,
    paddingVertical: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    backgroundColor: 'black',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default DetailsScreen;
