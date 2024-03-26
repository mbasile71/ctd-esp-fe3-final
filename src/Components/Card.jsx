import React, { useState } from "react";
import { useContextGlobal } from "./utils/global.context";
import { routes } from "./utils/routes";
import { Link } from "react-router-dom";
import Favs from "../Routes/Favs";


const Card = ({item}) => {

  const {state, dispatch} = useContextGlobal()

  //const {username, id} = useState(fav) 

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({type: 'ADD_FAV', payload: item})
    alert('Datos guardados en el localStorage...')
    //console.log(item)
  }
  
  return (
    <div className="card">
      
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={'/dentista/' + item.id}><h3>{item.name}</h3></Link>
        <h4>{item.username}</h4>
        <h5>{item.id}</h5>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
          
    </div>
  );
};

export default Card;
