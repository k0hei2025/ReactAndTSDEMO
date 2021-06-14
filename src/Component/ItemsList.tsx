import React from "react";

type itemSec = {
               items: {       
                              
                              name : string,
                              
               }[];

}

const ItemList : React.FC<itemSec> = (props)=>{
 
            
 return (
               <ul>
 {props.items.map(data=>(
 
               
                <li> {data.name} </li>
                
  ))}
  </ul>
               
 )}
export default ItemList;
