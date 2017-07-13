import React, {Component} from 'react'
import {connect} from 'react-redux'
import DashBoard from './Dashboard'

class DashBoardContainer extends Component {

  render() {
    return (
      <DashBoard />
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
export default connect(mapStateToProps, mapDispatchToProps)(DashBoardContainer)
