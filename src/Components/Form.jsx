import React, { useReducer, useState } from "react";
import { useContextGlobal } from "./utils/global.context";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  //const {state} = useContextGlobal()

  const [user, setUser] = useState({
    name: '',
    email: ''
  })

  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

  const handlerSubmit = (event) => {
    event.preventDefault()
    const eRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    if(user.name.length > 5 && eRegex.test(user.email)){
      setShow(true)
      setErr(false)
    } else {
        setErr(true)
      }
    }

  return (
    <div>
      {!show ? 
      <form onSubmit={handlerSubmit}>
          <label>Nombre Completo:</label>
          <input type="text" onBlur={(event) => setUser({...user, name: event.target.value})}/>
          <label>Email:</label>
          <input type="text" onBlur={(event) => setUser({...user, email: event.target.value})}/>
          <br />
          <button>Enviar</button>
      </form>
      : `Gracias ${user.name}, te contactaremos cuanto antes vía mail !`}
      {err ? ' Por favor verifique su información nuevamente' : null}
    </div>
  );
};

export default Form;
