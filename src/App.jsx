import { useState } from 'react'
import './App.scss'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'
import CurrencyContext from './CurrencyContext'

function App() {
  const [currency, setCurrency] = useState(localStorage.getItem('currency') || 'EUR')
  const [page, setPage] = useState('');   // default empty '' means home
  const [exchangeRate, setExchangeRate] = useState('1')

  return (
<CurrencyContext.Provider value={ {
  currency,     // 'EUR'
  setCurrency,  // the means to change the string to something else
  exchangeRate,
  setExchangeRate
} }>     

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

   </CurrencyContext.Provider>

  )
}

export default App
