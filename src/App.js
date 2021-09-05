import { Switch, Route, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import "./App.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Products } from "./Products";
import { About } from "./About";
import { Contact } from "./Contact";
import { Login } from "./Login";
import { Register } from "./Register";

//nav bar function react router
function App() {
  return (
    <div>
      <div className="topbar">
        <Button variant="contained">Post Equipment for Free</Button>
        <div className="searchbar">
          <TextField id="standard-basic" label="Search " />
          <Button variant="contained">SearchEquipment</Button>
        </div>
        <div className="logreg">
          <Link to="/login">
            <Button variant="contained">Login</Button>
          </Link>

          <Link to="/register">
            <Button variant="contained">Register</Button>
          </Link>
        </div>
      </div>
      <AppBar position="static">
        <nav className="appbar">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/About">About Us</Link>
          <Link to="/Contact">Contact Us</Link>
        </nav>
      </AppBar>

      <Switch>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

function LandingPage() {
  return (
    <div>
      <h1>INDIA'S LEADING EQUIPMENT EXCHANGE</h1>
      <h1>welcome to Equipment Rental Portal </h1>
      <h2>Our Services</h2>
      <ol>
        <li>
          Equipment Rentals india is india's leading exchange to buy sell and
          any equipments
        </li>
        <li>
          Our database is updated every day with latest equipments's available
          for sale or rent at defferent locations throughout India.
        </li>
      </ol>
      <h3>Catagories of the products </h3>
      <ul>
        <li>Construction Equipments</li>
        <li>Studio Equipments </li>
      </ul>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>May be youare looking for some other page?</h1>
    </div>
  );
}

export default App;
