import { useEffect, useState, useContext } from "react"
import CurrencyContext from './CurrencyContext'

import './BookList.scss'

export default function BookList() {

    const [books, setBooks] = useState([])
    const [page, setPage] = useState(1)
    const { currency, exchangeRate } = useContext(CurrencyContext)

    const getBooks = async () => {
        const response = await fetch(`https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php?page=${page}`)
        const books = await response.json();
        setBooks(books)
    }

    const nextPage = () => {
        setPage(page + 1)
    }

    const previousPage = () => {
        page > 1 ? setPage(page - 1) : setPage(1)
    }

    useEffect(() => {
       getBooks() 
    }, [page])

    return (
        <div className="latest-books">
            <h3>Latest Books</h3>

            <div className="page-buttons">
                <button onClick={previousPage} disabled={page === 1}>Previous page</button>
                <button onClick={nextPage}>Next page</button>
            </div>

            <div className="books">
                {
                    books.map(book => {
                        return (
                            <div key={book.id} className="book-item">
                                <img src={book.image} alt={book.title} />
                               <div className="book-info">
                                    <div className="book-title">{book.title} - {currency} { (book.price * exchangeRate).toFixed(2) }</div>
                                    <div dangerouslySetInnerHTML={ {__html: book.description} }></div>
                               </div>
                            </div> 
                        )
                    })
                }
            </div>
        </div>
    )
}