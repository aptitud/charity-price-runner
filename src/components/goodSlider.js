import React, {Component} from 'react'
import {
  Slider,
  StyleSheet,
  View,
 } from 'react-native'
import {connect} from 'react-redux'

class GoodSliderComponent extends Component{
  constructor() {
    super()
    this.state = {value:0}
  }
  render() {
    const { onSlideChange } = this.props
    return (
      <View style={{width: 300}}>
        <Slider
          style={styles.slider}
          {...this.props}
          onValueChange={value => onSlideChange(value * 1000)} />
      </View>
    )
  }
}

export default connect(
  state => ({
  }),
  dispatch => ({
    onSlideChange: value => dispatch({type: 'SLIDE_CHANGE', payload: value})
  })
)(GoodSliderComponent)

var styles = StyleSheet.create({
  slider: {
    height: 100,
    margin: 10,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
});
