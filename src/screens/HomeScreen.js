import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Text,
  View,
  Button,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import NewsItem from '../components/NewsItem';
import SearchBar from '../components/SearchBar';
import { fetchArticles, fetchByKeyword } from '../store/actions';

const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(true);
  const [term, setTerm] = useState('');

  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  const keywordArticles = useSelector((state) => state.keywordArticles);

  useEffect(() => {
    setIsLoading(true);
    loadArticles().then(() => setIsLoading(false));
  }, [loadArticles]);

  const loadArticles = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(fetchArticles());
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
    setIsLoading(false);
  }, [dispatch]);

  const fetchByKeywords = async () => {
    setIsLoading(true);
    if (term === '') {
      setIsLoading(false);
      setShowAll(true);
    } else {
      try {
        await dispatch(fetchByKeyword(term)).then(() => {
          setIsLoading(false);
          setShowAll(false);
        });
      } catch (error) {
        setShowAll(true);
        setError(error.message);
        setIsLoading(false);
      }
    }
  };

  const viewDetailsHandler = (article) => {
    navigation.navigate({
      name: 'details',
      params: { article: article },
    });
  };

  if (error) {
    return (
      <View style={styles.loading}>
        <Text style={styles.text}>{error}</Text>
        <Button title='Refresh' onPress={loadArticles} color='black' />
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size='large' color='black' />
      </View>
    );
  }

  if (!isLoading && showAll && articles.length === 0) {
    return (
      <View style={styles.loading}>
        <Text style={styles.text}>No New Articles</Text>
      </View>
    );
  }

  if (!isLoading && !showAll && keywordArticles.length === 0) {
    return (
      <View style={styles.loading}>
        <Text style={styles.text}>No Articles on this Topic</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <SearchBar
        term={term}
        onTermChanged={(newTerm) => setTerm(newTerm)}
        onSubmit={fetchByKeywords}
      />
      <FlatList
        onRefresh={loadArticles}
        refreshing={isLoading}
        data={showAll ? articles : keywordArticles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(itemData) => (
          <NewsItem
            article={itemData.item}
            onClick={() => viewDetailsHandler(itemData.item)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 10,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingBottom: 10,
    fontFamily: 'open-sans-bold',
    color: 'grey',
    fontSize: 18,
  },
});

export default HomeScreen;
