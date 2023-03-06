import { useState } from 'react'
import './Header.scss'
import TopMenuLink from './TopMenuLink';

export default function TopMenu(props) {

    const [open, setOpen] = useState(true);

    const toggleMenu = () => {
        setOpen(!open);
    }

    console.log(props)
    
    const { currentItem, setTestValue, setPage } = props;      // destructuring array -- can also be done above in props object instead

    return (
        <div className="top-menu">

            {
                open === false                                  // ternary
                    ? (
                        ''
                    )
                    : (
                        <nav className="top-menu__navigation">
                            <TopMenuLink
                            url = ""
                            label="Home"
                            currentItem= { currentItem } 
                            setPage = { setPage }
                            setTestValue= { setTestValue } 
                            />

                            <TopMenuLink
                            url = "about"
                            label="About Us"
                            currentItem= { currentItem } 
                            setPage = { setPage }
                            setTestValue= { setTestValue } 
                            />

                            <TopMenuLink
                            url = "contact"
                            label="Contact"
                            currentItem= { currentItem } 
                            setPage = { setPage }
                            setTestValue= { setTestValue } 
                            />
                        </nav>
                    )
            }
            <div className="top-menu__burger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </div>
    )
}