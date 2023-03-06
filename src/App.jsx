import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="app">
     <Header />

     <Body />
     
     <Footer />
   </div>
  )
}

export default App
