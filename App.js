import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/state/create_store'
import OrderForm from './src/forms/OrderForm/OrderForm'
import AppStyled from './app_styles'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppStyled>
          <AppStyled.container>
            <OrderForm />
          </AppStyled.container>
        </AppStyled>
      </Provider>
    )
  }
}

export default App
