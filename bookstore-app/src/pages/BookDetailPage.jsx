import { Link } from "react-router-dom";
import './style/BookDetailPage.css';

const BookDetailPage = () => {
    return (
        <div>
            <h1>Welcome to the Book Detail Page</h1>
            <p>This is the book detail page of the bookstore application</p>
            <p>See details about each of our books!</p>
            <Link to="/books">Go To Back</Link>
        </div>
    )
}
export default BookDetailPage;