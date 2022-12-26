import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import SupportAdmin from '../src/components/SupportAdmin/index'
import { Provider } from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import Reducers from './reducers';


const store = createStore( Reducers, compose(applyMiddleware(thunk)))
const path = window.location.pathname

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    { path.indexOf('/support') === -1 ? <App/> : <SupportAdmin /> } 
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

/*const store = createStore(Reducers,compose(applyMiddleware(thunk)))
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/


