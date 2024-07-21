import React from 'react'
import { forwardRef } from "react"
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Button } from '../components/ui/button'

export const TodoForm = forwardRef(({ addTodo }, ref) => {
    return (
        <form className='flex m-5' onSubmit={addTodo}>
            <div className='grid w-full max-w-sm items-center gap-1.5 flex-col '>
                <Label htmlFor="todoText" className='sr-only '>Todo Text</Label>
                <Input
                    ref={ref}
                    type="text"
                    id='todoText'
                    placeholder='Enter your todo here...'
                    className='rounded-r-none'
                />
            </div>
            <Button type="submit" className='rounded-l-none'>Add Todo</Button>
        </form>
    )
}
);
TodoForm.displayName = "TodoForm";
export default TodoForm;