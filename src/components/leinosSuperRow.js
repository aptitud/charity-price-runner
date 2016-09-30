import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Linking,
  Alert,
} from 'react-native'

import MyWeb from './webben'

const leinosSuperRow = (resultItem, slideValue) => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.listItem}>{resultItem.name}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableHighlight onPress={()=> Linking.openURL(resultItem.url)}>
          <Text style={styles.button}>Originalpris {resultItem.price.regular}:-</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => Alert.alert(
          'Thank you for your donation!',
          'Press OK to donate 100:- to UNHCR.',
          [
          {text: 'OK', onPress: () => Linking.openURL(resultItem.url)},
          {text: 'Cancel', onPress: () => {}},
          ]
        )}>
          <Text style={styles.button}>UNHCR {parseInt(resultItem.price.regular + slideValue)}:-</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    fontSize: 12,
    margin: 1,
  },
  priceItem:{
    fontSize: 13,
    color: 'red',
  },
  button: {
    height: 20,
    borderWidth: 1,
    borderColor: 'grey',
    margin: 2,
    padding: 2,
  },
});

export default leinosSuperRow
