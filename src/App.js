import Header from "./components/Header";
import Product from "./pages/product";
import './App.css'

import Footer from "./components/Footer";

function App() {
  return (
    <div className="">

      <Product>
        <Header />
        <Footer/>
      </Product>
    </div>
  );
}

export default App;
