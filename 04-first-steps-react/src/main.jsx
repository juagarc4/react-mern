import React from 'react'
import ReactDOM from 'react-dom/client'

//import { FirstApp } from './FirstApp'
// import { HelloWorldApp } from './HelloWorldApp'
import { CounterApp } from './CounterApp'

import './styles.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<FirstApp />*/}
    {/* <HelloWorldApp /> */}
    <CounterApp value={0} />
  </React.StrictMode>
)
