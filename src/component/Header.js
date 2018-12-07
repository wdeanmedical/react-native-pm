import React, { Component } from 'react'
import { View } from 'react-native'
import TopNav from './TopNav'
import TopSubNav from './TopSubNav'

class Header extends Component {
  componentWillMount() {}

  render() {
    return (
      <View>
        <TopNav />
        <TopSubNav />
      </View>
    )
  }
}

export default Header
