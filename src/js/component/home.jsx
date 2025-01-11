import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Todo = () => {
  const [state, setState] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []);
  
  const getTodos = async () =>{
    const response = await fetch('https://playground.4geeks.com/todo/users/einar', {
      method: "GET"
    });
    const data = await response.json();
    setState(data.todos);
    console.log(data)
  
  }

  const addTodo = async (input) =>{
    const response = await fetch("https://playground.4geeks.com/todo/todos/einar", {
      method: "POST",
      headers: {
        "Content-Type": "appLication/json"
      },
      body: JSON.stringify({ label: input, is_done: false })
    });
    const data = await response.json();
    console.log(data)
    getTodos()
    setInput("")
  }

  const deleteTodo = async (id) => {
    await fetch( `https://playground.4geeks.com/todo/todos/${id}`, {
      method: "DELETE"
    })
    getTodos()
  }
  
  return (
    <>
      <div className="container">
       <h1 className="nombre">TODO LIST</h1>
        <input
          className="barra"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button className="boton" onClick={() => addTodo(input)}>
          Añadir
        </button>

        <ul className="cuerpo">
          {state.map((item) => {
			return (
				<>
				<li  className="lista">
			{item.label}{" "}
			<button
			  className="botonX"
			  onClick={() => deleteTodo(item.id)}
			>
			  X
			</button>
		  </li>
		  </>

			);
		})}
			
		  
            

        </ul>
        <div className="contador">
          Total de elementos: {state.length}
        </div>
      </div>
    </>
  );
};

export default Todo;