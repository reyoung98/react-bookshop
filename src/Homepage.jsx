import BookList from './BookList'
import './Homepage.scss'

export default function Homepage() {
    return (
        <div className="homepage">
            <h2>Home</h2>
            <BookList />
        </div>
    )
}