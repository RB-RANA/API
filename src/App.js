import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage";
import SingleProduct from "./Pages/SingleProduct";
import ProductPage from "./Pages/ProductPage";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";
import Nav from "./Component/Nav";


function App() {
  return (
    <div className="App">
      <div className='nab'> <Nav/></div>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="Single" element={ <SingleProduct/> } />
        <Route path="product" element={ <ProductPage/> } />
        <Route path="*" element={ <NotFound/> } />
        <Route path="Cart" element={ <Cart/> } />
        </Routes>
    </div>
  );
}

export default App;
