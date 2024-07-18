import React, { Component, createRef } from 'react'
import Child1 from '../componemts/child1';
import Child2 from '../componemts/child2';

// Mounting = add something before adding html
//  -> Constructor
//  -> getDerivedStateFromProps = static method
//  -> render
//  -> componentDidMount = add data while loading the page first

// Updating
//  -> getDerivedStateFromProps
//  -> shouldComponentUpdate = performance improve
//  -> render
//  -> getSnapshotBeforeUpdate
//  -> componemtDidUpdate

// Unmounting
//  -> componentWillUnmount = performance improve

// Error Handling
//  -> getDerivedStateFromError
//  -> componentDidCatch

let fname = "Kush";

export default class LifeCycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            count: 0,
            number: 0,
        }
        // this.state = {
        //     name: `Mr. ${props.name}`,
        // }

        // API call

        // console.log("Constructor Life Cycle");
        // console.log(document.getElementById("container"));
        this.container = createRef();
    }

    async componentDidMount() {
        // console.log("componentDidMount Life Cycle");
        try {
            const res = await fetch("https://fakestoreapi.com/products/")
            // const json = await res.json()
            //  .log(json);
            this.setState({ data: json })
        } catch (error) { }

        // console.log("componentDidMount Life Cycle");
        // console.log(document.getElementById("container"));
        // document.getElementById("container").style.color = "blue";
        this.container.current.style.color = "blue";
    }

    getSnapshotBeforeUpdate = (prevProps, prevState) => { 
        return 10;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log("componentDidUpdate Life Cycle");  
        console.log(this.state);
        console.log(snapshot);
    }

    render() {
        const { name, data, count, number } = this.state
        // console.log("Render Life Cycle");
        return <div id='container'
            ref={this.container}>
            {count > 5 && < p > {name}</p>
            }
            <h1>{count}</h1>
            <h2>{number}</h2>
            <h3>{fname}</h3>
            <button onClick={
                () => {
                    this.setState(({ count, number }) => {
                        return {
                            count: count + 1,
                            number: number + 1,
                        }
                    })
                    // this.setState({
                    //     count: 5,
                    //     number: 10,
                    // })
                }
            }>
                Click Me!!
            </button>
            <Child1 />
            <Child2 count={count} />

            {/* {data && (
                <div>
                    <table className='border-collapse'>
                        <thead className='bg-blue-300'>
                            <tr>
                                <th className='p-1.5 border-2 text-left font-bold'>ID</th>
                                <th className='p-1.5 border-2 text-left font-bold'>Title</th>
                                <th className='p-1.5 border-2 text-left font-bold'>Price</th>
                                <th className='p-1.5 border-2 text-left font-bold'>Category</th>
                                <th className='p-1.5 border-2 text-left font-bold'>Description</th>
                                <th className='p-1.5 border-2 text-left font-bold'>Image</th>
                            </tr>
                        </thead>
                        <tbody className='text-justify bg-blue-100'>
                            {data.slice(0, 5).map((data) => (
                                <tr key={data.id}>
                                    <td className='p-1.5 border-2'>{data.id}</td>
                                    <td className='p-1.5 border-2 line-clamp-2'>{data.title}</td>
                                    <td className='p-1.5 border-2'>{data.price}</td>
                                    <td className='p-1.5 border-2'>{data.category}</td>
                                    <td className='p-1.5 border-2 line-clamp-2'>{data.description}</td>
                                    <td className='p-1.5 border-2'><img src={data.image} width="80px" height="50px" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )} */}
        </div >
    }
}       