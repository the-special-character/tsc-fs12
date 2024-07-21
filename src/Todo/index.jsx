import React, { Component, createRef } from 'react'

import TodoForm from './todoForm'
import TodoList from './todoList';
import TodoFilter from './todoFilter';

export default class Todo extends Component {
    state = {
        todoList: [],
        filterType: "all",
    }
    todoText = createRef();
    addTodo = (e) => {
        e.preventDefault();
        const todoTextRef = this.todoText.current;
        // async
        this.setState(({ todoList },) => {
            const todoText = todoTextRef.value;
            return {
                todoList: [...todoList,
                { id: new Date().valueOf(), text: todoText, isDone: false }],
            }
        }, () => {
            // sync
            todoTextRef.value = "";
        })

    };

    updateTodo = (item) => {
        this.setState(({ todoList }) => {
            const index = todoList.findIndex((x) => x.id === item.id);
            return {
                todoList: [...todoList.slice(0, index), item,
                ...todoList.slice(index + 1)]
            }
        })
    };

    deleteTodo = (item) => {
        this.setState(({ todoList }) => {
            const index = todoList.findIndex((x) => x.id === item.id);
            return {
                todoList: [...todoList.slice(0, index),
                ...todoList.slice(index + 1)]
            }
        })
    };
    onChangeFilterType = (filterType) => {
        this.setState({ filterType })
    }

    render() {
        const { todoList, filterType } = this.state
        return (
            <div className='h-screen bg-slate-300 flex flex-col  items-center'>
                <h1 className='my-4'>Todo List</h1>
                <TodoForm
                    addTodo={this.addTodo}
                    ref={this.todoText}
                />
                <TodoList
                    todoList={todoList}
                    updateTodo={this.updateTodo}
                    deleteTodo={this.deleteTodo}
                    filterType={filterType} />
                <TodoFilter filterType={filterType} onChangeFilterType={this.onChangeFilterType} />
            </div>
        )
    }
}
