import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'
import Profile from './Profile'

class ProfileContainer extends Component {

  render() {
    return (
      <Profile/>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
