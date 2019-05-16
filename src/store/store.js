import {createStore} from 'redux'
import rootReducer from '../reducers/index'

const configureStore = preloaderState => (
    createStore(
        rootReducer,
        preloaderState,
    )
)

const store = configureStore({})

export default store