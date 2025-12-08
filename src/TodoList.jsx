import { useState } from "react";

const TodoList = () => {

    const[todos, setTodo] = useState([]);
    const[input, setInput] = useState("")

    const handleAddTodo = () => {
        if(input.trim() !== "") {
       const newTodo = {
        id: crypto.randomUUID(),
        Text: input,
        completed: false
       }
       setTodo([...todos, newTodo])
       setInput("")
    }
    
       console.log(newTodo)
    }
    

return(
    <>
    <h1>Todo-List</h1>
    <input 
        type="text" 
        value={input}
        placeholder="add todo list"
        onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
        <ul>
            {
                todos.map(todo => (
                    <li>{todo.Text}</li>
                ))
            }
        </ul>
    </>
)
}

export default TodoList;