import { createContext, useEffect } from "react";
import { useReducer, useContext } from "react";
import axios from 'axios'
import { reducer } from "../../Reducer/reducer";



//Creamos el contexto y lo guardamos en una constante  
export const ContextGlobal = createContext();

/*export*/ const initialState = {
   theme: false,
   data: [],
   dentistaSelect: {},
   favs: JSON.parse(localStorage.getItem('favs')) || []
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState)

  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(url)
    .then(res => dispatch({type: 'VIEW_LIST', payload: res.data}))
    
  }, [])

  useEffect(() => {
     localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state.favs])
     

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal)
