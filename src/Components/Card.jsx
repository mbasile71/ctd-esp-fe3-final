import React, { useState } from "react";
import { useContextGlobal } from "./utils/global.context";
import { routes } from "./utils/routes";
import { Link, useLocation } from "react-router-dom";
import Favs from "../Routes/Favs";


const Card = ({item}) => {

  const {state, dispatch} = useContextGlobal()

  const { pathname } = useLocation()

  const mostrarButton = pathname === '/favs';

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const nuevoId = item.id

    const existeId = state.favs.some(item => item.id === nuevoId);

    if (existeId) {
      alert('No se puede agregar')
    } else {
      dispatch({type: 'ADD_FAV', payload: item})
      alert('Datos guardados en el localStorage...')
    }
    
    
  }
  
  return (
    <div className="card">
      
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={'/dentista/' + item.id}><h3>{item.name}</h3></Link>
        <h4>{item.username}</h4>
        <h5>{item.id}</h5>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        {/*<button onClick={addFav} className="favButton">Add fav</button>*/}
        {mostrarButton ? null : <button onClick={addFav} className="favButton">Add fav</button> }
    </div>
  );
};

export default Card;
