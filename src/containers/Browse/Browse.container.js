import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'
import Browse from './Browse'

class BrowseContainer extends Component {
  render() {
    return (
      <Browse/>
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
export default connect(mapStateToProps, mapDispatchToProps)(BrowseContainer)
