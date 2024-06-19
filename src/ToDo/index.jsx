import React, { Component } from 'react'

export default class ToDo extends Component {
  render() {
    return (
      <div className='flex flex-col items-center h-screen overflow-hidden'>
        <h1 className=' text-4xl font-semibold my-6'>ToDo App</h1>
        {/* Form */}
        <form className='flex'>
          <div>
            <label htmlFor="todoText" className='sr-only'>ToDo Text</label>
            <input type="text" id="todoText" placeholder='Enter your todo here...' className='rounded-l-md' />
          </div>
          <button type='submit' className="btn rounded-l-none"
          >Add Todo</button>
        </form>
        {/* List */} 
        <div className='flex flex-1 flex-col gap-4 w-full p-6 overflow-auto'>
          {/* Item 1 */}
          <div className='flex items-center'>
            <div>
              <label htmlFor="isCompleted" className='sr-only'>Toggle Complete</label>
              <input type="checkbox" id="isCompleted" />
            </div>
            <p className='px-6 flex-1 line-clamp-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, adipisci.</p>
            <button type='submit' className="btn"
            >Delete</button>
          </div>
          {/* Item 2 */}
          <div className='flex items-center'>
            <div>
              <label htmlFor="isCompleted" className='sr-only'>Toggle Complete</label>
              <input type="checkbox" id="isCompleted" />
            </div>
            <p className='px-6 flex-1 line-clamp-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, adipisci.</p>
            <button type='submit' className="btn"
            >Delete</button>
          </div>
          {/* Item 3 */}
          <div className='flex items-center'>
            <div>
              <label htmlFor="isCompleted" className='sr-only'>Toggle Complete</label>
              <input type="checkbox" id="isCompleted" />
            </div>
            <p className='px-6 flex-1 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet similique recusandae at velit hic officia, blanditiis assumenda qui itaque. Atque velit molestiae illum veritatis, odit dicta blanditiis accusamus ipsam.</p>
            <button type='submit' className="btn"
            >Delete</button>
          </div>
          {/* Item 4 */}
          <div className='flex items-center'>
            <div>
              <label htmlFor="isCompleted" className='sr-only'>Toggle Complete</label>
              <input type="checkbox" id="isCompleted" />
            </div>
            <p className='px-6 flex-1 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet similique recusandae at velit hic officia, blanditiis assumenda qui itaque. Atque velit molestiae illum veritatis, odit dicta blanditiis accusamus ipsam.</p>
            <button type='submit' className="btn"
            >Delete</button>
          </div>
          {/* Item 5 */}
          <div className='flex items-center'>
            <div>
              <label htmlFor="isCompleted" className='sr-only'>Toggle Complete</label>
              <input type="checkbox" id="isCompleted" />
            </div>
            <p className='px-6 flex-1 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet similique recusandae at velit hic officia, blanditiis assumenda qui itaque. Atque velit molestiae illum veritatis, odit dicta blanditiis accusamus ipsam.</p>
            <button type='submit' className="btn"
            >Delete</button>
          </div>
          {/* Item 6 */}
          <div className='flex items-center'>
            <div>
              <label htmlFor="isCompleted" className='sr-only'>Toggle Complete</label>
              <input type="checkbox" id="isCompleted" />
            </div>
            <p className='px-6 flex-1 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet similique recusandae at velit hic officia, blanditiis assumenda qui itaque. Atque velit molestiae illum veritatis, odit dicta blanditiis accusamus ipsam.</p>
            <button type='submit' className="btn"
            >Delete</button>
          </div>
          {/* Item 7 */}
          <div className='flex items-center'>
            <div>
              <label htmlFor="isCompleted" className='sr-only'>Toggle Complete</label>
              <input type="checkbox" id="isCompleted" />
            </div>
            <p className='px-6 flex-1 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet similique recusandae at velit hic officia, blanditiis assumenda qui itaque. Atque velit molestiae illum veritatis, odit dicta blanditiis accusamus ipsam.</p>
            <button type='submit' className="btn"
            >Delete</button>
          </div>
          {/* Item 8 */}
          <div className='flex items-center'>
            <div>
              <label htmlFor="isCompleted" className='sr-only'>Toggle Complete</label>
              <input type="checkbox" id="isCompleted" />
            </div>
            <p className='px-6 flex-1 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet similique recusandae at velit hic officia, blanditiis assumenda qui itaque. Atque velit molestiae illum veritatis, odit dicta blanditiis accusamus ipsam.</p>
            <button type='submit' className="btn"
            >Delete</button>
          </div>
          {/* Item 9 */}
          <div className='flex items-center'>
            <div>
              <label htmlFor="isCompleted" className='sr-only'>Toggle Complete</label>
              <input type="checkbox" id="isCompleted" />
            </div>
            <p className='px-6 flex-1 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet similique recusandae at velit hic officia, blanditiis assumenda qui itaque. Atque velit molestiae illum veritatis, odit dicta blanditiis accusamus ipsam.</p>
            <button type='submit' className="btn"
            >Delete</button>
          </div>
          {/* Item 10 */}
          <div className='flex items-center'>
            <div>
              <label htmlFor="isCompleted" className='sr-only'>Toggle Complete</label>
              <input type="checkbox" id="isCompleted" />
            </div>
            <p className='px-6 flex-1 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet similique recusandae at velit hic officia, blanditiis assumenda qui itaque. Atque velit molestiae illum veritatis, odit dicta blanditiis accusamus ipsam.</p>
            <button type='submit' className="btn"
            >Delete</button>
          </div>
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
