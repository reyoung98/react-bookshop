import { useState } from 'react'
import './Header.scss'

export default function TopMenu(props) {

    const [open, setOpen] = useState(true);

    const toggleMenu = () => {
        setOpen(!open);
    }

    console.log(props)

    return (
        <div className="top-menu">

            {
                open === false                            // ternary
                    ? (
                        ''
                    )
                    : (
                        <nav className="top-menu__navigation">
                            <a className={ 'link' + (props.currentItem === '' ? ' link--highlighted' : '')} href="#">Home</a>
                            <a className={ 'link' + (props.currentItem === 'about' ? ' link--highlighted' : '')} href="#about">About us</a>
                            <a className={ 'link' + (props.currentItem === 'contact' ? ' link--highlighted' : '')} href="#contact">Contact</a>

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