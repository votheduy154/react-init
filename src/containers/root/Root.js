import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as initAction from '../../redux/init/init.action'

class Root extends Component {
    render() {
        console.log(this.props)
        return (
            <div style={{color: 'red', textAlign: 'center', fontSize: 20}}>
                <p>Loading ....</p>
            </div>
        )
    }

    componentDidMount() {
        this.props.InitAction.initAction()
        setTimeout(() => {
            this.props.router.replace({
                pathname: '/Home',
                state: {fromDashboard: true}
            })
        }, 1000)
    }
}

const mapStateToProps = (rootState) => {
    return {
        payload: rootState,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        InitAction: bindActionCreators(initAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Root)
