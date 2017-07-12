/* @flow */
'use strict'
import { applyMiddleware, compose, createStore } from 'redux'
import { devToolsExtension } from 'redux-devtools-extension'
import reducers from './reducer.config'

export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    compose(
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
// NOTE: https://github.com/reactjs/react-redux/releases/tag/v2.0.0
// NOTE: This doesn't seem to work yet !
//   if (module.hot) {
//     (module.hot: any).accept('../reducers', () => {
//       const nextRootReducer = require('../reducers/index');
//       store.replaceReducer(nextRootReducer);
//     });
//   }
  return store
}