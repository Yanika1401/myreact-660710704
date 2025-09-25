import { Link } from "react-router-dom";
import './style/ContactPage.css';

const ContactPage = () => {
    return (
        <div>
            <h1>Welcome to the Contact Page</h1>
            <p>If you have any questions or feedback, feel free to reach out to us</p>
            <p>We’d love to hear from you and will get back to you as soon as possible!</p>
            <Link to="/books">Go To Back</Link>
        </div>
    )
}
export default ContactPage;