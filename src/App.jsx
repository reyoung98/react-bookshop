import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'

function App() {
  // const [count, setCount] = useState(0)
  const [page, setPage] = useState('');   // default empty '' means home

  return (
   <div className="app">
     <Header 
        page={ page } 
        setPage={ setPage }
      />

     <Body 
        page={ page }
     />

     <Footer />
   </div>
  )
}

export default App
