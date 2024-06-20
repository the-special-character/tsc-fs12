import React, { Component } from 'react'

export default class ToDo extends Component {
  state = {
    todoList: [],
    todoText: "",
  };
  changeText = (event) => {
    this.setState({
      todoText: event.target.value
    });
  };
  addTodo = (event) => {
    {
      event.preventDefault();
      this.setState(({ todoText, todoList }) => {
        return {
          todoList: [...todoList, todoText],
          todoText: "",
        };
      })
    }
  }


  render() {
    const { todoList, todoText } = this.state;
    return (
      <div className='flex flex-col items-center h-screen overflow-hidden'>
        <h1 className=' text-4xl font-semibold my-6'>ToDo App</h1>
        {/* Form */}
        <form className='flex' onSubmit={ this.addTodo}>
          <div>
            <label htmlFor="todoText" className='sr-only'>ToDo Text</label>
            <input type="text" id="todoText" placeholder='Enter your todo here...' className='rounded-l-md' value={todoText} onChange={this.changeText} required/>
          </div>
          <button type='submit' className="btn rounded-l-none"
          >Add Todo</button>
        </form>
        {/* List */}
        <div className='flex flex-1 flex-col gap-4 w-full p-6 overflow-auto'>
          {todoList.map((item) => {
            return (
              <div className='flex items-center'>
                <div>
                  <label htmlFor="isCompleted" className='sr-only'>Toggle Complete</label>
                  <input type="checkbox" id="isCompleted" />
                </div>
                <p className='px-6 flex-1 line-clamp-2'>{item}</p>
                <button type='submit' className="btn"
                >Delete</button>
              </div>
            );

          })}


        </div>
        {/* Filter type */}
        <div className='w-full flex '>
          <button type='button' className='btn rounded-none flex-1'>All</button>
          <button type='button' className='btn rounded-none flex-1'>Pending</button>
          <button type='button' className='btn rounded-none flex-1'>Completed</button>
        </div>
      </div>
    )
  }
}
