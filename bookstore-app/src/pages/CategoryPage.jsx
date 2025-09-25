import { Link } from "react-router-dom";
import './style/CategoryPage.css';

const CategoryPage = () => {
    return (
        <div>
            <h1>Welcome to the Category Page</h1>
            <p>This page is for the category of book from our bookstore</p>
            <p>Explore our collection of books and find your next read!</p>
            <Link to="/books">Go To Back</Link>
        </div>
    )
}
export default CategoryPage;