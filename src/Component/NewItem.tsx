import React,{useRef} from 'react'
import ItemList from './ItemsList'

import classes from '../Component/NewtodoForm.module.css'
type itemSec = {
  addItem : (name : string)=>void
  
}

const NewItem : React.FC<itemSec> =(props)=>{
               const inputRef = useRef<HTMLInputElement>(null);

             const  submitHandler=(event : React.FormEvent)=>{
                                   event.preventDefault();
                                   const inputText = inputRef.current!.value;
                                      //  console.log(inputText)  
                             props.addItem(inputText);         
               }
 return(
                <form onSubmit={submitHandler} className={classes.form} >
                <input type="text" id='todo-text' placeholder='Item Name' ref={inputRef}/>
                
                <button type='submit'>ADD</button>

                </form>
 )
}
export default NewItem
