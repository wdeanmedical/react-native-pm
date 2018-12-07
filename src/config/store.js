import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)
const store = createStoreWithMiddleware(reducers)

export default store
