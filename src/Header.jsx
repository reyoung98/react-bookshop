import './Header.scss'
import TopMenu from './TopMenu'

export default function Header() {

    const fooValue = '123';

    return (
        <div className="header__sitename">The Bookshelf
        <TopMenu 
            currentItem={ 'about' }
            />
        </div>
        
    )
}