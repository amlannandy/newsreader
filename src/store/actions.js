import axios from 'axios';

import { API_KEY } from '../utils/credentials';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const FETCH_BY_KEYWORD = 'FETCH_BY_KEYWORD';

export const fetchArticles = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `http://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=${API_KEY}`
      );
      const articles = response.data.articles;
      dispatch({ type: FETCH_ARTICLES, payload: articles });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const fetchByKeyword = (keyword) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `http://newsapi.org/v2/everything?q=${keyword}&apiKey=${API_KEY}`
      );
      const articles = response.data.articles;
      dispatch({ type: FETCH_BY_KEYWORD, payload: articles });
    } catch (error) {
      throw error;
    }
  };
};
