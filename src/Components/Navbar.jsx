import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from './utils/routes'
import NavStyle from '../Components/Styles/Navbar.module.css'
import '../../src/index.css'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useContextGlobal()

  const toggleThme = () => {
    dispatch({type: 'CHANGE_THEME'})
  }

  return (
    <nav className={NavStyle.mainModule}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <Link to={routes.home}><h4>Home</h4></Link>
      <Link to={routes.favs}><h4>Destacados</h4></Link>
      <Link to={routes.contacto}><h4>Contacto</h4></Link>


      <button onClick={toggleThme}>Change theme</button>
    </nav>
  )
}

export default Navbar