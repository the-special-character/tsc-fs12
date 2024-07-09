import React, { Component } from 'react'
// Mounting = add something before adding html
//  -> Constructor
//
// 
// 

// Updating

// Unmounting

// Error Handling

export default class LifeCycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
        }

        // this.state = {
        //     name: `Mr. ${props.name}`,
        // }

        // API call

        console.log("Constructor Life Cycle");
        console.log(document.getElementById("container"));
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps Life Cycle");
        return {
            name: `Mr. ${props.name}`
        }
    }
    async componentDidMount() {

        try {
            const res = await fetch("https://fakestoreapi.com/products/1")
            const json = await res.json()
            console.log(json);
            this.setState({ data: json })
        } catch (error) {

        }


        // console.log("componentDidMount Life Cycle");
        // console.log(document.getElementById("container"));
        // document.getElementById("container").style.color = "blue";

    }

    render() {
        const { name, data } = this.state
        console.log("Render Life Cycle");
        return <div id='container'>
            <p>{name}</p>
            {data && <p>{data.title}</p>}
        </div>
    }
}
