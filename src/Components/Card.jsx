import React from "react";
import { useContextGlobal } from "./utils/global.context";
import { routes } from "./utils/routes";
import { Link } from "react-router-dom";


const Card = ({ name, username, id, item }) => {

  const {state, dispatch} = useContextGlobal()

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({type: 'ADD_FAV', payload: item})
    //return <Link to={'/dentista/' + id}></Link>
    console.log(state.favs)
  }
  
  return (
    <div className="card">
      
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={'/dentista/' + id}><h3>{name}</h3></Link>
        <h4>{username}</h4>
        <h5>{id}</h5>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
