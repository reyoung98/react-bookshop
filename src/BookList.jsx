import { useEffect, useState } from "react"

import './BookList.scss'

export default function BookList() {

    const [books, setBooks] = useState([])

    const getBooks = async () => {
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php')
        const books = await response.json();
        setBooks(books)
    }

    useEffect(() => {
       getBooks() 
    }, [])

    return (
        <div className="latest-books">
            <h3>Latest Books</h3>

            <div className="books">
                {
                    books.map(book => {
                        return (
                            <div key={book.id} className="book-item">
                                <img src={book.image} alt={book.title} />
                               <div className="book-info">
                                    <div className="book-title">{book.title} - {book.price}</div>
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