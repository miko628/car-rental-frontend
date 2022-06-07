

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">Car rental</Link>
        <ul>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/pricing">Pricing</Link>
            </li>
        </ul>
    </nav>
}