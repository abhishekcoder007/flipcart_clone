import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/navbar';
import Upperbody from './component/upperBody/Upperbody';
import Carosel from './component/carosel/Carousel';
import Home from './pages/home/home';
import {Routes,Route}  from "react-router-dom";
import DetailProduct from './pages/detailproduct/DetailProduct';

function App() {
  return (
    <div >
      {/* <Home/> */}

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="product/:id"  element={<DetailProduct/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
