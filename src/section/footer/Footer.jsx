import "./footer.css"
import imgframe from "../../assets/images/Frame 2.png"

export const Footer = () => {
  return (
    <>
        <footer>
        <div className="container">
            <div className="footer_wrapper">
                <div className="footer_logo">
                    <picture>
                        <img src={imgframe} alt="not found"/>
                    </picture>
                </div>
                <div className="footer_icon">
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}
