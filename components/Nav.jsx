import "./Nav.css";

function Nav(){
    return (
        <>
        <nav className= "">
            <div className="logo">
                <p className="nav-logo">Biccas</p>
        
            </div>
            <ul className="">
                <li><a>Home</a></li>
                <li><a>Product</a></li>
                <li><a>FAQ</a></li>
                <li><a>Blog</a></li>
                <li><a>About Us</a></li>
            </ul>
            <div className="btn-box">
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </nav>

        </>
    )
}

export default Nav;