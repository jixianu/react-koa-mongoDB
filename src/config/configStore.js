import { createStore, applyMiddleware  } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'
import * as allAction from '../actions'

/*export default function configStore(initialState) {
  const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    initialState);
  return store;
}*/

// https://github.com/zalmoxisus/redux-devtools-extension/blob/master/examples/counter/store/configureStore.js 配置
export default function configureStore(initialState) {
  const composeEnhancers = composeWithDevTools({ allAction });
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(thunk)
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}