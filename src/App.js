import { useState } from "react";
import Navbar from './components/Navbar.js';
import Main from './components/Main.js';
import MainFooter from './components/MainFooter.js';
import Transactions from './components/Transactions.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/App.css';


function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}  />
      <Main/>
      <MainFooter />
      <Transactions />

    </div>
  );
}

export default App;
