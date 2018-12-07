import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers'

const middleware = [ReduxThunk]

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const { createLogger } = require('redux-logger')
  const logger = createLogger({
    collapsed: (getState, action) => action.type === APP_INIT,
    duration: true,
  })
  middleware.push(logger)
}

const store = createStore(reducers, {}, applyMiddleware(...middleware))

export default store
