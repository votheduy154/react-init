import React, {Component} from 'react'
import {connect} from 'react-redux'
import HomePage from './HomePage'

class HomePageContainer extends Component {

  render() {
    return (
      <HomePage/>
    )
  }

  componentDidMount() {
    // window.onpopstate = this.onBackButtonEvent
    // setTimeout(()=>{
    //     this.props.router.go(1)
    // }, 2000)
  }
}

const mapStateToProps = (rootState) => {
  return {
    payload: rootState,
  }
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)
