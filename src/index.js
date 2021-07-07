import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from '../src/components/Home'
import reportWebVitals from './reportWebVitals'

// ReactDom.render takes in two arguments, what I want to render and where I want to render it i.e("root")
ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
