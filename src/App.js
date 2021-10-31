import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './component/ShareComponent/Header/Header';
import Home from './component/Home/Home';
import ManageUser from './component/ManageUser/ManageUser';
import UserOrder from './component/UserOrder/UserOrder';
import User from './component/User/User';
import Footer from './component/ShareComponent/Footer/Footer';
import NotFound from './component/NotFound/NotFound';
import Login from './component/Login/Login';
import AuthProvider from './context/AuthProvider';
import AddTourSpot from './component/AddTourSpot/AddTourSpot';
import Booking from './component/Booking/Booking';
import PrivateRoute from './component/PrivareRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <PrivateRoute path='/userOrder'>
            <UserOrder></UserOrder>
          </PrivateRoute>
          <PrivateRoute path='/booking/:id'>
            <Booking></Booking>
          </PrivateRoute>

          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/manageUser'>
            <ManageUser></ManageUser>
          </PrivateRoute>
          <Route path='/userOrder'>
            <UserOrder></UserOrder>
          </Route>
          <PrivateRoute path='/addTourSpot'>
            <AddTourSpot></AddTourSpot>
          </PrivateRoute>
          <PrivateRoute path='/user'>
            <User></User>
          </PrivateRoute>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
