import React, {Component} from 'react'
import {connect} from 'react-redux'
import Browse from './Browse'

class BrowseContainer extends Component {
  render() {
    return (
      <Browse/>
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
export default connect(mapStateToProps, mapDispatchToProps)(BrowseContainer)
