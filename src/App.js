import React from 'react'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import store from './config/store'
import Header from './component/Header'
import TopButtons from './component/TopButtons'
import DashboardScreen from './screen/DashboardScreen'
import Footer from './component/Footer'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text>CareFirst Practice Manager 3</Text>
          <Header />
          <TopButtons />
          <DashboardScreen />
          <Footer />
        </View>
      </Provider>
    )
  }
}
