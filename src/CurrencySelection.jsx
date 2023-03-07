import { useState, useEffect } from 'react'

export default function CurrencySelection() {

    const [currency, setCurrency] = useState(localStorage.getItem('currency') || 'EUR')
    const [exchangeRate, setExchangeRate] = useState('1')

    const handleSelect = (event) => {
        setCurrency(event.target.value)
    }

    const loadExchangeRates = async () => {
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/exchange-rates.php')
        const currencies = await response.json();
        // console.log(currencies)
        
        // for (let item of currencies) {
        //     if (item.currency === currency){
        //         setExchangeRate(item.rate);
        //     } 
        // }
        // The above works, but a better way below:

        const exchange_rate = currencies.find((rate) => {
            return rate.currency === currency
        })

        // console.log(exchange_rate)
        setExchangeRate(exchange_rate.rate)
    }

    useEffect(() => {
        loadExchangeRates();
        localStorage.setItem('currency', currency)
    }, [currency])

    return (
        <div className="currency-selection" >
            Select Currency:
            <select value={ currency } onChange={ handleSelect }>             
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="CZK">CZK</option>
            </select>
            <div>{
                currency !== 'EUR'
                ? <>EUR Exchange rate: { exchangeRate }</>
                : ''
            }
            </div>
        </div>
    )
}