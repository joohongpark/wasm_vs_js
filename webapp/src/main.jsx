import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import init from './lib/wasm/find_prime_number'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

init()
.then(() => {
  console.log(`ok`);
});