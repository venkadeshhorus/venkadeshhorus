import './App.css';
import {createStore} from "redux";
import {Provider} from "react-redux";
//import userReducer from './action/reducer/user';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Users from './Pages/Users';
import Home from './Pages/Home';
import userReducer from './store/reducer/user';

function App() {
  const store = createStore(userReducer);
  return (

    <Provider store={store}>
      <Router>
      <Switch>
      <Route path="/users" component={Users} />
        <Route path="/" component={Home}/>
        </Switch>
        </Router>
    </Provider>
    
  );
}

export default App;
