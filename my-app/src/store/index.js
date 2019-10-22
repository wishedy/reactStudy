import {createStore,applyMiddleware,compose} from 'redux';
import reducer from './reducer';
import createSagaMiddleware  from 'redux-saga';
import todoSagas from './sagas';
//import ReduxThunk from 'redux-thunk'; // no changes here 😀
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
    // other store enhancers if any
);
const store = createStore(
    reducer,
    enhancer
    );
sagaMiddleware.run(todoSagas);
export default store;