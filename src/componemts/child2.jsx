import React, { Component, PureComponent } from 'react'
import shallowCompare from 'react-addons-shallow-compare';


export default class Child2 extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return shallowCompare(this, nextProps, nextState);
    // }
    render() {
        const { count } = this.props
        // console.log("child2 render");
        return (
            <div>
                <p>Child2</p>
                <p>{`count: ${count}`}</p>
            </div>
        )
    }
}
