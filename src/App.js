import logo from './logo.svg';
import './App.css';
import Navbar from './components/partials/Navbar'
// import Header from './components/Header'
// import Footerr from './components/Footer'
import Footer from './components/partials/Footer'
import OrderFood from './pages/OrderFood'
import HomePage from './pages/RestaurantCutom/HomePage'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  //client's information in navigation bar
  const navInfo = {
    picture: "P",
    name: "patsanan"
  }

  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar info={navInfo} />
        <Switch>
          <div className="bg-gray-50">
            <Route path="/" exact component={OrderFood} />
            <Route path="/restaurant" component={HomePage} />
          </div>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
