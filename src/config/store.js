import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'
import reducer from '../reducers'
import { APP_INIT } from '../actions/action_types'

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

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
