import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import SignIn from './component/SignIn';
import HouseType from './component/HouseType';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route exact path="/signin" element={<SignIn />}></Route>
          <Route path="/apartments" element={<HouseType/>}></Route>
          {/*<Route path="/restaurants/:id" element={<Restaurant />}></Route>
          <Route path="/restaurant_pizzas" element={<RestaurantPizzaForm />} />  */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
