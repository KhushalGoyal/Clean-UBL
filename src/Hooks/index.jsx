import { useEffect, useState } from "react";

const HookArea=()=>{
    const[input,setInput]=useState("");
    const[list,setList]=useState([]);
    useEffect(()=>{
        console.log("Render as Component Did mount");
       return()=>{
        console.log("Removed");
       }
    },[])
    useEffect(()=>{
        console.log("Updated");
    },[list])
    const onInputs=(e)=>{
        setInput(e.target.value);
        
        
    }
    const onAdd=()=>{
        if(input.length > 5){
           const curr={
            task:input,
            id:parseInt(Math.random() *100)
           }
            setList((prev)=> [curr,...prev])
            console.log(list);
            setInput("");
        }
       
    }
    const onDeletes=(i)=>{
        console.log(i);
       const newList=list.filter((ele)=>(
            ele.id!=i
       ))
       setList(newList);
    }
    return(
        <>
        <div>
            <h1>Add the Task</h1>
        <input
         
          name="task"
         value={input} 
         onChange={onInputs}
          placeholder="Enter the task" />
            <button onClick={onAdd}>Add</button>
            </div>
            <ul>
                {list.map((i) => (
                    <li key={i.id}>
                        <span>{i.task}</span>
                        <button onClick={()=>onDeletes(i.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            
        </>
    )
}
export default HookArea;