import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'
import HomePage from './HomePage'

class HomePageContianer extends Component {

  render() {
    console.log(this.props)
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
export default connect(mapStateToProps, mapDispatchToProps)(HomePageContianer)
