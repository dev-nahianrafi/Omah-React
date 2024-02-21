import "./navbar.css"
import logoimg from "../../assets/images/logo.png"

export const Navbar = () => {
  return (
    <>
        <nav id="navbar"> 
        <div className="container">
            <div className="nav_wrapper">
                <div className="nav_logo">
                    <picture>
                        <a href="#">
                            <img src={logoimg} alt="not found"/>
                        </a>
                    </picture>
                </div>
                <div className="nav_menu">
                    <ul>
                        <li>
                            <a href="#">home</a>
                        </li>
                        <li>
                            <a href="#">about</a>
                        </li>
                        <li>
                            <a href="#">Properties</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </>
    
  )
}
