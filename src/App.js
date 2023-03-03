import {Routes, Route} from "react-router-dom";
import "./style.scss"
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Catalog from "./pages/Catalog/Catalog";
import Delivery from "./pages/Delivery/Delivery"


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={''} element={<Layout/>}>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/catalog'} element={<Catalog/>}/>
                <Route path={'/delivery'} element={<Delivery/>}/>
            </Route>

            <Route path={'/register'} element={<Register/>}/>
            <Route path={'/login'} element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
