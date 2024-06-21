import React, { Component } from "react";

export default class Todo extends Component {
  state = {
    todoList: [],
    todoText: "",
    filterType: "all",
    editedItem: [],
  };

  changeText = (event) => {
    this.setState({ todoText: event.target.value });
  };

  addTodo = (event) => {
    event.preventDefault();

    this.setState(({ todoText, todoList }) => {
      return {
        todoList: [
          ...todoList,
          { todoText, isDone: false, id: new Date().valueOf() },
        ],
        todoText: "",
      };
    });
  };

  updateTodo = (item) => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((x) => x.id === item.id);
      return {
        todoList: [
          ...todoList.slice(0, index),
          {
            ...todoList[index],
            isDone: !todoList[index].isDone,
          },
          ...todoList.slice(index + 1),
        ],
      };
    });
  };

  deleteTodo = (item) => {
    this.setState(({ todoList }) => {
      const index = todoList.findIndex((x) => x.id === item.id);

      return {
        todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
      };
    });
  };

  render() {
    const { todoList, todoText, filterType, editedItem } = this.state;

    return (
      <div className="flex flex-col items-center h-screen overflow-hidden">
        <h1 className="text-4xl font-semibold my-6">Todo App</h1>
        {/* form */}
        <form className="flex" onSubmit={this.addTodo}>
          <div>
            <label htmlFor="todoText" className="sr-only">
              Todo Text
            </label>
            <input
              type="text"
              id="todoText"
              placeholder="Enter your todo here..."
              className="rounded-l-md"
              value={todoText}
              onChange={this.changeText}
              required
            />
          </div>
          <button type="submit" className="btn rounded-l-none">
            Add Todo
          </button>
        </form>
        {/* list */}
        <div className="flex flex-1 flex-col gap-4 w-full p-6 overflow-auto">
          {todoList
            // .filter((item) => {
            //   switch (filterType) {
            //     case "pending":
            //       return item.isDone === false;

            //     case "completed":
            //       return item.isDone === true;

            //     default:
            //       return true;
            //   }
            // })
            .map((item) => {
              if (
                filterType === "all" ||
                (filterType === "pending" && item.isDone === false) ||
                (filterType === "completed" && item.isDone === true)
              ) {
                console.log(editedItem.some((x) => x.id === item.id));
                return (
                  <div className="flex items-center gap-4" key={item.id}>
                    <div>
                      <label htmlFor="isCompleted" className="sr-only">
                        Toggle Complete
                      </label>
                      <input
                        type="checkbox"
                        name="isCompleted"
                        id="isCompleted"
                        checked={item.isDone}
                        onChange={() => this.updateTodo(item)}
                      />
                    </div>
                    {editedItem.some((x) => x.id === item.id) ? (
                      <form className="flex flex-1">
                        <div className="flex-1">
                          <label htmlFor="editTodo" className="sr-only">
                            Edit Todo
                          </label>
                          <input
                            type="text"
                            id="editTodo"
                            value={item.todoText}
                            onChange={(event) => {
                              this.setState(({ todoList }) => {
                                const index = todoList.findIndex(
                                  (x) => x.id === item.id
                                );
                                return {
                                  todoList: [
                                    ...todoList.slice(0, index),
                                    {
                                      ...todoList[index],
                                      todoText: event.target.value,
                                    },
                                    ...todoList.slice(index + 1),
                                  ],
                                };
                              });
                            }}
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn"
                          onClick={(event) => {
                            event.preventDefault();

                            this.setState(({ editedItem }, props) => {
                              const index = todoList.findIndex(
                                (x) => x.id === item.id
                              );
                              return {
                                editedItem: [
                                  ...editedItem.slice(0, index),
                                  ...editedItem.slice(index + 1),
                                ],
                              };
                            });
                          }}
                        >
                          Update Value
                        </button>
                      </form>
                    ) : (
                      <p className="flex-1 line-clamp-2">{item.todoText}</p>
                    )}

                    <button
                      className="btn"
                      onClick={() => {
                        this.setState(({ editedItem }) => {
                          return {
                            editedItem: [...editedItem, item],
                          };
                        });
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn"
                      onClick={() => this.deleteTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              }
              return null;
            })}
        </div>
        {/* filter type */}
        <div className="w-full flex">
          <button
            type="button"
            className="btn rounded-none flex-1"
            style={{
              backgroundColor: filterType === "all" ? "orange" : "blue",
            }}
            onClick={() => {
              this.setState({ filterType: "all" });
            }}
          >
            All
          </button>
          <button
            type="button"
            className="btn rounded-none flex-1"
            style={{
              backgroundColor: filterType === "pending" ? "orange" : "blue",
            }}
            onClick={() => {
              this.setState({ filterType: "pending" });
            }}
          >
            Pending
          </button>
          <button
            type="button"
            className="btn rounded-none flex-1"
            style={{
              backgroundColor: filterType === "completed" ? "orange" : "blue",
            }}
            onClick={() => {
              this.setState({ filterType: "completed" });
            }}
          >
            Completed
          </button>
        </div>
      </div>
    );
  }
}
