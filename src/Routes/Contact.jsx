import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>En que podemos ayudarte?</h2>
      <p>Envianos tu consulta y te contactaremos a la brevedad...</p>
      <Form/>
    </div>
  )
}

export default Contact