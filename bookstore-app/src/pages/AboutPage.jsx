import { Link } from "react-router-dom";
import './style/AboutPage.css';

const AboutPage = () => {
    return (
        <div>
            <h1>Welcome to the About Page</h1>
            <p>This is about our bookstore application</p>
            <p>Explore our collection of books and find your next read!</p>
            <Link to="/books">Go To Back</Link>
        </div>
    )
}
export default AboutPage;