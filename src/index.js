import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configs/store.config'

// page container
import { Root, HomePage } from './containers';

// config store
const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

// Router
const AppRouter = () => {
  return (
    <Router history={history}>
      <Router path="/" component={Root}></Router>
      <Router path="/Home" component={HomePage}></Router>
    </Router>
  )
}

ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('root'));
registerServiceWorker();
