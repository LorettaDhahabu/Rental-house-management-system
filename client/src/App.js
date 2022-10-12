import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import Houses from './component/Houses';
import Tenants from './component/Tenants';
import Dashboard from './component/Dashboard'
import SignInPage from './component/SignInPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route exact path="/login" element={<SignInPage />}></Route>
          <Route path="/apartments" element={<Houses />}></Route>
          {/* <Route path="/apartments/:id" element={<HouseTenant />}></Route> */}
          <Route path="/tenants" element={<Tenants />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
