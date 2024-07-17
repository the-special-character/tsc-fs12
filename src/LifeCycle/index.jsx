import React, { Component } from 'react'
import Child1 from '../componemts/child1';
import Child2 from '../componemts/child2';

// Mounting = add something before adding html
//  -> Constructor
//  -> getDerivedStateFromProps = static method
//  -> render
//  -> componentDidMount

// Updating
//  -> getDerivedStateFromProps
//  -> shouldComponentUpdate
//  -> render
//  -> getSnapshotBeforeUpdate
//  -> componemtDidUpdate

// Unmounting

// Error Handling

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
    }

    async componentDidMount() {
        // console.log("componentDidMount Life Cycle");
        try {
            const res = await fetch("https://fakestoreapi.com/products/")
            // const json = await res.json()
            // console.log(json);
            this.setState({ data: json })
        } catch (error) { }

        // console.log("componentDidMount Life Cycle");
        // console.log(document.getElementById("container"));
        // document.getElementById("container").style.color = "blue";
        this.container.style.color = "blue";
    }

    getSnapshotBeforeUpdate = (prevProps, prevState) => { }

    componentDidUpdate(prevProps, prevState) {
        // console.log("componentDidUpdate Life Cycle");
        console.log(this.state);
    }

    render() {
        const { name, data, count, number } = this.state
        // console.log("Render Life Cycle");
        return <div id='container' ref={(ref) => {
            this.container = ref;
        }}>
            <p>{name}</p>
            <h1>{count}</h1>
            <h2>{number}</h2>
            <h3>{fname}</h3>
            <button onClick={
                () => {
                    fname: "Virat";
                    this.setState({
                        count: 5,
                        number: 10,
                    })
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
        </div>
    }
}       