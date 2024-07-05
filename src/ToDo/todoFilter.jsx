import React from 'react'

const TodoFilter = ({ filterType, changeFilterType }) => {
    return (
        <div className="w-full flex">
            <button
                type="button"
                className="btn rounded-none flex-1"
                style={{
                    backgroundColor: filterType === "all" ? "green" : "blue",
                }}
                onClick={() => changeFilterType("all")}
            >
                All
            </button>
            <button
                type="button"
                className="btn rounded-none flex-1"
                style={{
                    backgroundColor: filterType === "Pending" ? "green" : "blue",
                }}
                onClick={() => changeFilterType("Pending")}
            >
                Pending
            </button>
            <button
                type="button"
                className="btn rounded-none flex-1"
                style={{
                    backgroundColor: filterType === "Completed" ? "green    " : "blue",
                }}
                onClick={() => changeFilterType("Completed")}
            >
                Completed
            </button>
        </div>
    )
}

export default TodoFilter