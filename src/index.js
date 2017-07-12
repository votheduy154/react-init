import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, browserHistory, Route, RouterContext, withRouter} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './configs/store.config'

// page container
import {Root, HomePage, Browse, DashBoard, Profile} from './containers'

// config store
const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

// Router
const AppRouter = () => {
  return (
    <Router history={history}>
      <Router path="/" component={Root}></Router>
      <Router path="/Home" component={HomePage}></Router>
      <Router path="/Browse" component={Browse}></Router>
      <Router path="/Dashboard" component={DashBoard}></Router>
      <Router path="/Profile" component={Profile}></Router>
    </Router>
  )
}

ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('root'))
registerServiceWorker()
