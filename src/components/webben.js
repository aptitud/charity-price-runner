import React, { Component } from 'react';
import { WebView } from 'react-native';

class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://www.prisjakt.nu/produkt.php?o=3895094'}}
        style={{marginTop: 20}}
      />
    );
  }
}

export default MyWeb
