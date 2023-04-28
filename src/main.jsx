import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { legacy_createStore } from 'redux'
import { Provider } from 'react-redux'
import padelReducers from './reducers/padelReducers'
import { BrowserRouter } from 'react-router-dom'


const store = legacy_createStore(
  padelReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.createRoot(document.getElementById('root')).render(

  
    // <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>
    // </React.StrictMode>
  
  ,
)
