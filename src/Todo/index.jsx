import React, { Component } from 'react'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Button } from '../components/ui/button'

export default class Todo extends Component {
    render() {
        return (
            <div className='h-screen bg-slate-300 flex flex-col  items-center p-4'>
                <h1>Todo List</h1>

                <form className='flex m-5'>
                    <div className='grid w-full max-w-sm items-center gap-1.5 flex-col '>
                        <Label htmlFor="todoText" className='sr-only '>Todo Text</Label>
                        <Input type="text"
                            id='todoText'
                            placeholder='Enter your todo here...'
                            className='rounded-r-none'
                        />
                    </div>
                    <Button className='rounded-l-none'>Add Todo</Button>
                </form>
            </div>
        )
    }
}
