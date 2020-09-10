import { FETCH_ARTICLES, FETCH_BY_KEYWORD } from './actions';

const initialState = {
  articles: [],
  keywordArticles: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      const articles = action.payload;
      return { ...state, articles: articles };
    case FETCH_BY_KEYWORD:
      const keywordArticles = action.payload;
      return { ...state, keywordArticles: keywordArticles };
    default:
      return state;
  }
};

export default reducer;
