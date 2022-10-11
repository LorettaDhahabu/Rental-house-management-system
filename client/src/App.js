import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import SignIn from './component/SignIn';
import Houses from './component/Houses';
import Tenants from './component/Tenants';
import HouseTenant from './component/HouseTenant'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route exact path="/signin" element={<SignIn />}></Route>
          <Route path="/apartments" element={<Houses />}></Route>
          <Route path="/apartments/:id" element={<HouseTenant />}></Route>
          <Route path="/tenants" element={<Tenants />} /> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
