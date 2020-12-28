import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/root_reducer';

if (process.env.NODE_ENV === 'development') {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk, logger)
    )
} else if (process.env.NODE_ENV === 'production') {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk)
    )
}

const configureStore = (preloadedState = {}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;