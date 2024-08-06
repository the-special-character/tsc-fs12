import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const useTodo = () => {
  const todoText = useRef(null);
  const [status, setStatus] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [filterType, setFilterType] = useState("all");

  const loadTodo = useCallback(async (ft) => {
    const currentState = "LOAD_TODO";
    try {
      setStatus((val) => [
        ...val,
        {
          state: currentState,
          status: "loading",
          message: "Todo List is loading...",
        },
      ]);

      let url = "http://localhost:3000/todoList";
      if (ft !== "all") {
        url += `?isDone=${ft === "completed"}`;
      }

      const res = await fetch(url);
      const json = await res.json();
      setTodoList(json);
      setFilterType(ft);
    } catch (error) {
    } finally {
      setStatus((val) => {
        const index = val.findIndex((x) => x.state === currentState);
        return [...val.slice(0, index), ...val.slice(index + 1)];
      });
    }
  }, []);

  const addTodo = useCallback(async (e) => {
    const currentState = "ADD_TODO";
    try {
      e.preventDefault();
      setStatus((val) => [
        ...val,
        {
          state: currentState,
          status: "loading",
          message: "Todo List is loading...",
        },
      ]);

      const todoTextRef = todoText.current;
      const text = todoTextRef.value;

      const res = await fetch("http://localhost:3000/todoList", {
        method: "POST",
        body: JSON.stringify({
          text,
          isDone: false,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const json = await res.json();

      setTodoList((val) => [...val, json]);

      todoTextRef.value = "";
      // async code
    } catch (error) {
    } finally {
      setStatus((val) => {
        const index = val.findIndex((x) => x.state === currentState);
        return [...val.slice(0, index), ...val.slice(index + 1)];
      });
    }
  }, []);

  const updateTodo = useCallback(async (item) => {
    try {
      const res = await fetch(`http://localhost:3000/todoList/${item.id}`, {
        method: "PUT",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const json = await res.json();

      setTodoList((val) => {
        const index = val.findIndex((x) => x.id === item.id);
        return [...val.slice(0, index), json, ...val.slice(index + 1)];
      });
    } catch (error) {}
  }, []);

  const deleteTodo = useCallback(async (item) => {
    const currentState = "DELETE_TODO";
    try {
      setStatus((val) => [
        ...val,
        {
          state: currentState,
          status: "loading",
          message: "Todo List is loading...",
        },
      ]);

      await fetch(`http://localhost:3000/todoList/${item.id}`, {
        method: "DELETE",
      });

      setTodoList((val) => {
        const index = val.findIndex((x) => x.id === item.id);
        return [...val.slice(0, index), ...val.slice(index + 1)];
      });
    } catch (error) {
    } finally {
      setStatus((val) => {
        const index = val.findIndex((x) => x.state === currentState);
        return [...val.slice(0, index), ...val.slice(index + 1)];
      });
    }
  }, []);

  const addTodoStatus = useMemo(
    () => status.find((x) => x.state === "ADD_TODO"),
    [status]
  );
  const loadTodoStatus = useMemo(
    () => status.find((x) => x.state === "LOAD_TODO"),
    [status]
  );
  const deleteTodoStatus = useMemo(
    () => status.filter((x) => x.state === "DELETE_TODO"),
    [status]
  );

  useEffect(() => {
    loadTodo("all");
  }, []);

  return {
    todoText,
    status,
    todoList,
    filterType,
    loadTodo,
    addTodo,
    updateTodo,
    deleteTodo,
    addTodoStatus,
    loadTodoStatus,
    deleteTodoStatus,
  };
};

export default useTodo;
