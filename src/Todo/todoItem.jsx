import React, { memo, useEffect, useRef, useState } from "react";
import { Trash, Edit, Check } from "lucide-react";
import { Checkbox } from "../components/ui/checkbox";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { cn } from "../lib/utils";
import { Input } from "../components/ui/input";

const TodoItem = ({ item, updateTodo, deleteTodo, isLast, status }) => {
  console.log("todoitem render");

  const [isUpdating, setIsUpdating] = useState(false);
  const editInput = useRef(null);

  const toggleUpdating = () => {
    setIsUpdating((val) => !val);
  };

  useEffect(() => {
    if (editInput.current) {
      editInput.current.value = item.text;
    }
  }, [isUpdating]);

  return (
    <li className="list-none m-4" key={item.id}>
      <div className="flex items-center gap-4">
        <div>
          <Checkbox
            id="isDone"
            checked={item.isDone}
            onCheckedChange={() =>
              updateTodo({ ...item, isDone: !item.isDone })
            }
          />
          <label htmlFor="isDone" className="sr-only">
            is Done
          </label>
        </div>
        {isUpdating ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updateTodo({ ...item, text: editInput.current.value });
              toggleUpdating();
            }}
            className="flex flex-1 gap-4 items-center"
          >
            <Input type="text" ref={editInput} />
            <Button size="icon" type="submit">
              <Check className="h-4 w-4" />
            </Button>
          </form>
        ) : (
          <div className="flex flex-1 gap-4 items-center">
            <p
              className={cn("!m-0 flex-1 line-clamp-3", {
                "line-through": item.isDone,
              })}
            >
              {item.text}
            </p>
            <Button size="icon" onClick={toggleUpdating}>
              <Edit className="h-4 w-4" />
            </Button>
          </div>
        )}
        <Button
          disabled={status?.status === "loading"}
          size="icon"
          onClick={() => deleteTodo(item)}
        >
          <Trash className="h-4 w-4" />
        </Button>
      </div>
      {!isLast && <Separator className="my-4" />}
    </li>
  );
};

export default memo(TodoItem);
