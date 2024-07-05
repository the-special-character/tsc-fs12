import React from 'react'

const TodoList = ({
    todoList,
    filterType,
    updateTodo,
    updateItem,
    changeEditText,
    editItem,
    editedItem,
    deleteTodo,
}) => {
    return (
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
                                    onChange={() => updateTodo(item)} />
                            </div>
                            {editedItem.some(x => x.id === item.id) ?
                                <form className='flex flex-1'
                                    onSubmit={(event) => updateItem(event, item)}>
                                    <div className='flex-1'>
                                        <label htmlFor="editTodo" className='sr-only'>Edit Todo</label>
                                        <input
                                            className='w-[90%]'
                                            type="text"
                                            id="editTodo"
                                            value={item.todoText}
                                            onChange={(event) => changeEditText(event, item)} />
                                    </div>
                                    <button
                                        type='submit'
                                        className='btn'
                                    >
                                        Update Value
                                    </button>
                                </form> :
                                <p className='flex-1 line-clamp-2'>{item.todoText}</p>
                            }
                            <button
                                type='submit'
                                className="btn"
                                onClick={() => editItem(item)}
                            >Edit</button>
                            <button
                                type='submit'
                                className="btn"
                                onClick={() => deleteTodo(item)}
                            >Delete</button>
                        </div>
                    );
                }
                return null;
            })}

        </div>
    )
}

export default TodoList;