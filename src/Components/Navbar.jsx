import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
    return (
            <nav className="navbar" >
                <Link to="/">Home</Link>
                <Link to="/bye">Ethical Issues</Link>
                <Link to="/idk">Current Events</Link>
                <Link to="/idk">Our Views</Link>
                <Link to="/idk">What You Can Do</Link>
                <Link to="/idk">Sources</Link>
            </nav>
            
    );
}
