
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from 'react-router-dom';
import { routes } from "./Components/utils/routes";
import Home from "./Routes/Home";
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'
import Contact from './Routes/Contact'

function App() {
  return (
      <div className="App">
          <Navbar/>

          <Routes>
            <Route path={routes.home} element={<Home />}/>
            <Route path={routes.favs} element={<Favs />}/>
            <Route path='/dentista/:id' element={<Detail />}/>
            <Route path={routes.contacto} element={<Contact />}/>
          </Routes>

          <Footer/>
      </div>
  );
}

export default App;
