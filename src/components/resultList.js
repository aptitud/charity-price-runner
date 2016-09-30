import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  View,
  Text,
  ListView
} from 'react-native'
import leinosSuperRow from './leinosSuperRow'

class ResultListComponent extends Component{
  render() {
    const { result, slideValue } = this.props
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(result)
    return (
      <ListView
        style={styles.list}
        dataSource={dataSource}
        renderRow={ (rowData) => leinosSuperRow(rowData, slideValue) }
      />
    )
  }
}

export default connect(
  state => ({
    result: state.search.result,
    slideValue: state.search.slide
  }))
(ResultListComponent)

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 30,
    paddingBottom: 20
  }
});
