import React, { createContext, useState } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css'

const initialValue = {
  count: 0,
  items: [],
  itemIds: []
}

export const AppContext = createContext([initialValue, () => {}]);

function App(props) {
  const [cart, setCart] = useState(initialValue)
  return (
    <div className="">
        <AppContext.Provider value={[cart, setCart]}>
          {props.children}
          <Header />
          <Footer/>
      </AppContext.Provider>
    </div>
  );
}

export default App;