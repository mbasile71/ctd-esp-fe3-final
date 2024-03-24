import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'
import { routes } from '../Components/utils/routes'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const params = useParams()
  const navigate = useNavigate()
  
  //const [data, useData] = useState('')
  
  const url = 'https://jsonplaceholder.typicode.com/users/' + params.id
  console.log('aca' + params.id)

  const {state, dispatch} = useContextGlobal()

  useEffect(() => {
    axios(url)
    //.then(res => useData(res.data))
    .then(res => dispatch({type: 'CARD_SELECTED', payload: res.data}))
  }, [])

  const HandlerClick = () => {
    navigate(routes.home)
  }
  
  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      {/*<h4>{state.dentistaSelect.name}</h4>
      <h4>{state.dentistaSelect.email}</h4>
      <h4>{state.dentistaSelect.phone}</h4>
      <h4>{state.dentistaSelect.website}</h4>
  <button onClick={HandlerClick}>Volver al Home</button>*/}

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{state.dentistaSelect.name}</td>
            <td>{state.dentistaSelect.email}</td>
            <td>{state.dentistaSelect.phone}</td>
            <td>{state.dentistaSelect.website}</td>
          </tr>
        </tbody>
      </table>
      <br />
    <button onClick={HandlerClick}>Volver al Home</button>

    </>
  )
}

export default Detail