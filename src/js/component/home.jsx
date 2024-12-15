import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const lista = [{
	numero: "ocho",
	color: "negro",
	pais: "Alemania",
  
  }, {
	numero: "dos",
	color: "blanco",
	pais: "España",
  
  }, {
	numero: "cinco",
	color: "gris",
	pais: "Camboya",
  
  }]
  
const Todo = () => {
	const [state, setState] = useState(lista)
	const [color, setColor] = useState("")

    const añadir = () => {
		setState([...state, {color: color}])
		setColor("")
	}
	const eliminarItem = (listValorIndex) => {
		const list = state.filter((listItem, index) => {
			return index != listValorIndex
		})
		setState(list)
	}

	return (<>
	<div className="conatainer">
	<p className="header"> TODO LIST </p>
	<input className="barra" value={color} onChange={(e) => {
		setColor(e.target.value)
	}} />
	<button className="boton" onClick={añadir}>Añadir</button>
	
	<ul className="cuerpo">
		{state.map((item, index) => {
			return (<>
			<li className="lista">
				{item.color} <button className="botonX" onClick={() => eliminarItem(index)}>X</button>
			</li>
			</>)
		})}
		 
	</ul>
	<div className="contador" >
        Total de elementos: {state.length}
      </div>

	</div>
	

	</>
		
	

	)
}

export default Todo;
