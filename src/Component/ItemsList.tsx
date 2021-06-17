import React from "react";

import classes from '../Component/item.module.css';
import style from '../Component/moduletodos.module.css';

type itemSec = {
               items: {       
                              
                              name : string,
                              
               }[];

}

const ItemList : React.FC<itemSec> = (props)=>{
 
            
 return (
               <ul className={style.todos}>
 {props.items.map(data=>(
 
               
                <li className={classes.item} > {data.name} </li>
                
  ))}
  </ul>
               
 )}
export default ItemList;
