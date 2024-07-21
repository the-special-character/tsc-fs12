// import React, { createRef, PureComponent } from 'react'
// import { CheckIcon, Edit3Icon, TrashIcon } from 'lucide-react'
// import { Button } from '../components/ui/button'
// import { Checkbox } from "../components/ui/checkbox"
// import { Separator } from '../components/ui/separator'
// import { cn } from '../lib/utils'
// import { Input } from '../components/ui/input'

// export default class TodoItem extends PureComponent {
//     state = {
//         isUpdating: false,
//     }

//     editInput = createRef();

//     componentDidUpdate() {
//         const { text } = this.props.item;
//         if (this.editInput.current) this.editInput.current.value = text;
//     }
//     toggleUpdating = () => {
//         this.setState(({ isUpdating }) => {
//             return {
//                 isUpdating: !isUpdating,
//             }
//         },())
//     }

//     render() {
//         console.log('todo item');
//         const { item, updateTodo, deleteTodo } = this.props;
//         const { isUpdating } = this.state
//         return (
//             <li className='list-none' key={item.id}>
//                 <div className='flex items-center gap-4'>
//                     <div>
//                         <Checkbox id="isDone"
//                             checked={item.isDone}
//                         />
//                         <label htmlFor="isDone" className='sr-only'>
//                             is Done
//                         </label>
//                     </div>
//                     <div className='flex flex-1 gap-4'>
//                         {isUpdating ? (
//                             <form onSubmit={(e) => {
//                                 e.preventDefault();
//                                 updateTodo({ ...item, text: this.editInput.current.value })
//                                 this.toggleUpdating();
//                             }}
//                             >
//                                 <Input ref={this.editInput}
//                                     className="flex-1" />
//                                 <Button size="icon" type="submit">
//                                     <CheckIcon className="h-4 w-4" />
//                                 </Button>
//                             </form>
//                         ) : (
//                             <>
//                                 <p className={cn("!m-0 p-00 flex-1 line-clamp-3", { "line-through": item.isDone })}
//                                 >
//                                     {item.text}
//                                 </p>
//                                 <Button size="icon"
//                                     onClick={this.toggleUpdating}>
//                                     <Edit3Icon className="h-4 w-4" />
//                                 </Button></>
//                         )}
//                     </div>
//                     <Button size="icon"
//                         onClick={() => deleteTodo(item)}>
//                         <TrashIcon className="h-4 w-4" />
//                     </Button>
//                 </div>
//                 <Separator className="my-4" />
//             </li >
//         )
//     }
// }
