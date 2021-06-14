import React,{useState} from 'react'
import ItemList from './Component/ItemsList'
import ADDItem from './Component/NewItem'


const App: React.FC =()=>{

  const [state , setState] = useState<{name : string}[]>([]);

  const addNewHandler=(text : string)=>{
    setState(prevTodos=>[ ...prevTodos ,  {name : text}]);
   console.log(text)
  
  }
  let toDoData = [{
    name : addNewHandler
 
  }]
  return <div className="App">
   <ADDItem addItem={addNewHandler} />
   <ItemList items = {state} />
    
  </div>
}
export default App