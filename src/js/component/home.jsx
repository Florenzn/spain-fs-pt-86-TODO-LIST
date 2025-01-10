import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const addTodo = async (label) =>{
	const response = await fetch("https://playground.4geeks.com/todo/users/einar", {
		method: "POST",
		headers: {
			"Content-Type": "appLication/json"
		},
		body: JSON.stringify({ is_done: false, label })

		

	});
	const todos = await response.json();
	return todos;
}

const deleteTodo = async (id) => {
	await fetch( 'https://playground.4geeks.com/todo/users/lista/$(id)', {
		method: "DELETE"
	})
}
  

const Todo = () => {
  const [state, setState] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    actualizarLista();
  }, []); 
  const actualizarLista = async () => {
    const listaTodo = await getTodos();
    setState(listaTodo);
  };

  const añadir = async (label) => { 
    await addTodo(label);
    await actualizarLista();
    setInput(""); 
  };

  const eliminarItem = async (id) => {
    await deleteTodo(id);
    await actualizarLista();
  };

  return (
    <>
      <div className="container">
        <p className="header"> TODO LIST </p>
        <input
          className="barra"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button className="boton" onClick={() => añadir(input)}>
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
			  onClick={() => eliminarItem(item.id)}
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