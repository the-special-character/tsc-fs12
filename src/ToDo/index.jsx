import React, { Component, useImperativeHandle } from 'react'

export default class ToDo extends Component {
  state = {
    todoList: [],
    todoText: "",
    filterType: "all",
    editedItem: [],
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
    const { todoList, todoText, filterType, editedItem } = this.state;
    return (
      <div className='flex flex-col items-center h-screen overflow-auto bg-blue-100'>
        <h1 className=' text-4xl font-semibold my-6 text-blue-500'>ToDo App</h1>

        {/* Form */}
        <form className='flex' onSubmit={this.addTodo}>
          <div>
            <label htmlFor="todoText" className='sr-only'>ToDo Text</label>
            <input
              type="text"
              id="todoText"
              placeholder='Enter your todo here...' className='rounded-l-md'
              value={todoText}
              onChange={this.changeText}
              required />
          </div>
          <button
            type='submit'
            className="btn rounded-l-none"
          >Add Todo</button>
        </form>

        {/* List */}
        <div className='flex flex-1 flex-col gap-4 w-full p-6 overflow-auto'>
          {todoList.map((item) => {
            if (
              filterType === "all" ||
              filterType === "Pending" && item.isDone === false ||
              filterType === "Completed" && item.isDone === true) {
              return (
                <div className='flex gap-4 items-center justify-center p-2' key={item.id}>
                  <div>
                    <label htmlFor="isCompleted" className='sr-only'>Toggle Complete</label>
                    <input
                      type="checkbox"
                      id="isCompleted"
                      checked={item.isDone}
                      onChange={() => this.updateTodo(item)} />
                  </div>
                  {
                    editedItem.some(x => x.id === item.id) ? <form className='flex flex-1'>
                      <div className='flex-1'>
                        <label htmlFor="editTodo" className='sr-only'>Edit Todo</label>
                        <input
                          type="text"
                          id="editTodo"
                          value={item.todoText}
                          onChange={(event) => {
                            this.setState(({ todoList }) => {
                              const index = todoList.findIndex((x) => x.id === item.id);
                              return {
                                todoList: [
                                  ...todoList.slice(0, index),
                                  {
                                    ...todoList[index],
                                    todoText: event.target.value,
                                  },
                                  ...todoList.slice(index + 1),
                                ],
                              }
                            })
                          }} />
                      </div>
                      <button
                        type='submit'
                        className='btn'
                        onClick={(event) => {
                          event.preventDefault();
                          this.setState(({ editedItem }, props) => {
                            const index = todoList.findIndex((x) => x.id === item.id);
                            return {
                              editedItem: [
                                [
                                  ...editedItem.slice(0, index),
                                  ...editedItem.slice(index + 1)
                                ]
                              ]
                            }
                          })
                        }}>
                        Update Value
                      </button>
                    </form> :
                      <p className='flex-1 line-clamp-2'>{item.todoText}</p>

                  }
                  <button
                    type='submit'
                    className="btn"
                    onClick={() => {
                      this.setState(({ editedItem }, props) => {
                        return {
                          editedItem: [...editedItem, item]
                        }
                      })
                    }}
                  >Edit</button>
                  <button
                    type='submit'
                    className="btn"
                    onClick={() => this.deleteTodo(item)}
                  >Delete</button>
                </div>
              );
            }
            return null;
          })}

        </div>

        {/* Filter type */}
        <div className='w-full flex'>
          <button
            type='button'
            className='btn rounded-none flex-1'
            style={
              { backgroundColor: filterType === 'all' ? 'green' : 'blue' }
            }
            onClick={() => {
              this.setState({ filterType: 'all' })
            }}>All</button>
          <button
            type='button'
            className='btn rounded-none flex-1'
            style={
              { backgroundColor: filterType === 'Pending' ? 'green' : 'blue' }
            }
            onClick={() => {
              this.setState({ filterType: 'Pending' })
            }}>Pending</button>
          <button
            type='button'
            className='btn rounded-none flex-1'
            style={
              { backgroundColor: filterType === 'Completed' ? 'green' : 'blue' }
            }
            onClick={() => {
              this.setState({ filterType: 'Completed' })
            }}>Completed</button>
        </div>
      </div>
    )
  }
}