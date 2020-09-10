import React from 'react';
import { WebView } from 'react-native-webview';

const WebViewScreen = ({ route }) => {
  const url = route.params.link;

  return <WebView source={{ uri: url }}></WebView>;
};

export default WebViewScreen;
