import reducer from '../reducers/reducer';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default (initialState) => {
    const store = createStore(
        reducer,
        initialState,
        compose(applyMiddleware(reduxImmutableStateInvariant()), window.devToolsExtension ? window.devToolsExtension() : f =>f)
    );
    return store;
};