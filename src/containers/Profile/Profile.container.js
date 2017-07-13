import React, {Component} from 'react'
import {connect} from 'react-redux'
import Profile from './Profile'

class ProfileContainer extends Component {

  render() {
    return (
      <Profile/>
    )
  }

  componentDidMount() {
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
