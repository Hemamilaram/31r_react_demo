import './Navbar.css';

function Navbar() {
    return (
        <div id="navbar">
            <div>
            <img src="https://preview.colorlib.com/theme/anipat/img/logo.png.webp" alt="" />
            </div>
            <div id='navbar_right'>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Pages</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}

export default Navbar