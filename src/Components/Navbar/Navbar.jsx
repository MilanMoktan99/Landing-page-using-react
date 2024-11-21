import './Navbar.css'

function Navbar(){

    return (
        <div className='nav'>
            <div className="nav-logo">EV-motion</div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li className='nav-contact'>Contact</li>
            </ul>
        </div>
    );
}

export default Navbar