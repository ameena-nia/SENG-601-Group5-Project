import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
    return (
            <nav className="navbar" >
                <Link to="/">Home</Link>
                <Link to="/ethics">Ethical Issues</Link>
                <Link to="/events">Current Events</Link>
                <Link to="/todo">Solutions</Link>
                <Link to="/views">Our Views</Link>
                <Link to="/sources">Sources</Link>
            </nav>
            
    );
}
