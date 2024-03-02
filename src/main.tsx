import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tweet } from './components/Tweet'
import './components/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div>
      <Tweet user="Danrley" content="My first tweet"/>
      <Tweet user="Bia" content="Vá lavar a louça"/>
      <Tweet user="Scorpion" content="Get over here"/>
    </div>
  </React.StrictMode>,
)
