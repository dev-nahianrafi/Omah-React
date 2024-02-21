import "./partnership.css"
import partnerl from "../../assets/images/patner_logo (1).png"
import partnerlo from "../../assets/images/patner_logo (2).png"

export const Partnership = () => {
  return (
    <>
        <section id="partner_ship">
        <div className="container">
            <div className="partner_ship_wrapper">
                <div className="partnership_left">
                    <h3 className="nnn">Hubungi Kami</h3>
                    <div className="left_wrapper">
                        <div className="left_call">
                            <i className="fa-solid fa-phone"></i>
                            <div className="hhh">
                                <h3>call</h3>
                                <h4>+6281232936733</h4>
                            </div>
                            <a href="#" className="last_btn">Call Now</a>
                        </div>
                        <div className="left_call">
                            <i className="fa-solid fa-envelope"></i>
                            <div className="hhh">
                                <h3>Mail</h3>
                                <h4>omahindev@gmail.com</h4>
                            </div>
                            <a href="#" className="last_btn">Call Now</a>
                        </div>
                    </div>
                </div>
                <div className="partnership_right">
                    <h3 className="nnn">Penghargaan</h3>
                    <div className="pr_wrapper">
                        <div className="f_logo">
                            <picture>
                                <img src={partnerl} alt="no found"/>
                            </picture>
                        </div>
                        <div className="f_logo">
                            <picture>
                                <img src={partnerlo} alt="no found"/>
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
