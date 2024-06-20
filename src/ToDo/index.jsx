import React, { Component, useImperativeHandle } from 'react'

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
          todoList: [...todoList, { todoText, isDone: false, id: new Date().valueOf() }],
          todoText: "",
        };
      })
    }
  }
  updateTodo = (item) => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((x) => x.id === item.id);
      return {
        todoList: [
          ...todoList.slice(0, index),
          { ...todoList[index], isDone: !todoList[index].isDone },
          ...todoList.slice(index + 1),
        ],
      }
    })
  }

  deleteTodo = (item) => {
    this.setState(({ todoList }, props) => {
      const index = todoList.findIndex((x) => x.id === item.id);
      return {
        todoList: [
          ...todoList.slice(0, index),
          ...todoList.slice(index + 1)
        ]
      }
    })
  }

  render() {
    const { todoList, todoText } = this.state;
    return (
      <div className='flex flex-col items-center h-screen overflow-auto'>
        <h1 className=' text-4xl font-semibold my-6'>ToDo App</h1>
        {/* Form */}
        <form className='flex' onSubmit={this.addTodo}>
          <div>
            <label htmlFor="todoText" className='sr-only'>ToDo Text</label>
            <input type="text" id="todoText" placeholder='Enter your todo here...' className='rounded-l-md' value={todoText} onChange={this.changeText} required />
          </div>
          <button type='submit' className="btn rounded-l-none"
          >Add Todo</button>
        </form>
        {/* List */}
        <div className='flex flex-1 flex-col gap-4 w-full p-6 overflow-auto'>
          {todoList.map((item) => {
            return (
              <div className='flex items-center justify-center p-2 bg-cyan-200 hover:bg-fuchsia-200' key={item.id}>
                <div>
                  <label htmlFor="isCompleted" className='sr-only'>Toggle Complete</label>
                  <input type="checkbox" id="isCompleted" checked={item.isDone}
                    onChange={() => this.updateTodo(item)} />
                </div>
                <p className='px-6 flex-1 line-clamp-2'>{item.todoText}</p>
                <button type='submit' className="btn" onClick={() => this.deleteTodo(item)}
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
