import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'
import { routes } from '../Components/utils/routes'
import detailStyle from '../Components/Styles/Detail.module.css'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const params = useParams()
  const navigate = useNavigate()
  
 const url = 'https://jsonplaceholder.typicode.com/users/' + params.id
  console.log('aca' + params.id)

  const {state, dispatch} = useContextGlobal()

  useEffect(() => {
    axios(url)
    .then(res => dispatch({type: 'CARD_SELECTED', payload: res.data}))
  }, [])

  const HandlerClick = () => {
    navigate(routes.home)
  }
  
  return (
    <>
    <div className={detailStyle.mainContext}>
          <h1>Datos del dentista con ID: {params.id} </h1>
          <table>
            <thead>
              <tr className={detailStyle.bgThead}>
                <th>Nombre</th>
                <th>Email</th>
                <th>Telefono</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              <tr className={detailStyle.bgTboby}>
                <td>{state.dentistaSelect.name}</td>
                <td>{state.dentistaSelect.email}</td>
                <td>{state.dentistaSelect.phone}</td>
                <td>{state.dentistaSelect.website}</td>
              </tr>
            </tbody>
          </table>
        </div>  
        <br />
        <div className={detailStyle.mainBtn}>
          <button onClick={HandlerClick}>Volver al Home</button>
        </div>
        
    
    </>
  )
}

export default Detail