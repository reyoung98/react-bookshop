import './Body.scss'

export default function Header({ page }) {
    
    let content = '';

    if (page === '') {
        content = (
            <h2>Welcome to our Bookshelf</h2>
        )
    } else if (page === 'about') {
        content = (
            <h2>About us</h2>
        )
    } else if (page === 'contact') {
        content = 
        (
            <h2>Contact us</h2>
        )
    } else {
        content = (
            <h2>404: Page not found</h2>
        )
    }
    
    return (
        <main className="main">
            <h1 className="app__headline">The Bookshelf</h1>

            { content }
            <button>Enter</button>
        </main>
    )
}