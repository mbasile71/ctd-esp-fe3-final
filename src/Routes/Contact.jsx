import React from 'react'
import Form from '../Components/Form'
import contactStyle from '../Components/Styles/Contact.module.css'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const {state} = useContextGlobal()

  return (
    <div >
      <h2 className={contactStyle.main} >En que podemos ayudarte?</h2>
      <p>Envianos tu consulta y te contactaremos a la brevedad...</p>
      <Form/>
    </div>
  )
}

export default Contact