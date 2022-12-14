import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducers/reducer';
import BaseLayout from './components/BaseLayout';
import AddRestauranut from './components/AddRestaurant';
import DisplayRestaurants from './components/DisplayRestaurants';
import Logout from './components/Logout';
import ViewDetails from './components/ViewDetails';
import Login from './components/Login';
import Register from './components/Register';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const token = localStorage.getItem('jwt')
if(token) {
  store.dispatch({type: 'ON_LOGIN', payload: token})
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <BaseLayout>
          <Routes>
            <Route path = '/register' element = { <Register /> } />
            <Route path = '/login' element = { <Login /> } />
            <Route path = '/home' element = { <App />} />
            <Route path = '/add-restaurant' element = { <AddRestauranut />} />
            <Route path = '/display-list' element = { <DisplayRestaurants /> } />
            <Route path = '/:restaurantName' element = { <ViewDetails /> } />
            <Route path = '/logout' element = { <Logout /> } />
          </Routes>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
