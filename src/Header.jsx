import './Header.scss'
import TopMenu from './TopMenu'
import { useState } from 'react'

export default function Header({setPage}) {

    const [testValue, setTestValue] = useState(null);

    return (
        <header className="header">
            <div className="header__sitename">The Bookshelf</div>

            <div>
                Last menu item clicked: { testValue }
            </div>

            <TopMenu 
                currentItem={ 'about' }
                setPage = { setPage }
                setTestValue={ setTestValue }
                />
           
        </header>
        
    )
}