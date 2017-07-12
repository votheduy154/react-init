import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'
import DashBoard from './Dashboard'

class DashBoardContainer extends Component {

  render() {
    return (
      <DashBoard />
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
export default connect(mapStateToProps, mapDispatchToProps)(DashBoardContainer)
