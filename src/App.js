import {Routes, Route} from "react-router-dom";
import "./style.scss"
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={''} element={<Layout/>}>
                <Route path={'/'} element={<Home/>}/>


            </Route>

            <Route path={'register'} element={<Register/>}/>
        </Routes>
    </div>
  );
}

export default App;
