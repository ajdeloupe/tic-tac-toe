import reducer from '../reducers/reducer';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* export default (initialState) => {
    const store = createStore(
        reducer,
        initialState,
        compose(applyMiddleware(reduxImmutableStateInvariant), window.devToolsExtension ? window.devToolsExtension() : f =>f)
    );
    return store;
}; */
//const store = createStore(reducer);
//export default store;

export default (initialState) => {
    const store = createStore(
        reducer,
        initialState,
        compose(applyMiddleware(reduxImmutableStateInvariant()), window.devToolsExtension ? window.devToolsExtension() : f =>f)
    );
    return store;
};