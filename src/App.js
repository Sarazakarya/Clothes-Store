import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./component/Main/Main";
import FilterCompnent from './component/FilterCompnent/FilterCompnent';
import Singleproducte from "./component/FilterCompnent/Singleproducte";
import Login from './component/Login/Login';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="filteredProducts/:type" element={<FilterCompnent />} />
        <Route path="filteredProducts/:type/:id" element={<Singleproducte />} />
        <Route path="Login" element={<Login />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
