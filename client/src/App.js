import React from 'react';
import './App.css';
import Login from './Component/Login/login'
import setAuth from './ActionCreater/setAuth'
import {setCurrentUser} from './ActionCreater/loginaction'
import {store} from './Store/store'
import jwt from 'jsonwebtoken'
import { Provider} from 'react-redux';

const App=()=> {

  if(localStorage.jwttoken){
    setAuth(localStorage.jwttoken)
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwttoken)))
  }
  return (
    <Provider store={store}>
    <div className="App">
      <Login/>
    </div>
    </Provider>
  );
}

export default App;
