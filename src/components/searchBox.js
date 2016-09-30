import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextInput } from 'react-native'
import { searchTextUpdated } from '../actions'

class SearchBoxComponent extends Component{
  search = e => {
    const text = e.nativeEvent.text
    if (text.length > 3)
      this.props.handleChange(text)
  }
  render() {
    const { result } = this.props
    return (
        <TextInput onChange={this.search.bind(this)} style={{height: 40, borderColor: 'gray', borderWidth: 1}}/>
    )
  }
}

export default connect(
  state => ({
  }),
  dispatch => ({ 
    handleChange: input => dispatch(searchTextUpdated(input))
  }))
(SearchBoxComponent)
