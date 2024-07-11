import React, { Component } from 'react'

export default class Child2 extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        // if (this.props === !nextProps || this.state === !nextState) {
        //     return true
        // }
        return false
    }
    render() {
        const { count } = this.props
        return (
            <div>
                <p>Child2</p>
                <p>{`count: ${count}`}</p>
            </div>

        )
    }
}
