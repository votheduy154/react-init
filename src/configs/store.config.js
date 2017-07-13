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
  return store
}