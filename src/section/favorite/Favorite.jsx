import "./favorite.css"
import item1 from "../../assets/images/item1 (1).png"
import item2 from "../../assets/images/item1 (2).png"

export const Favorite = () => {
  return (
    <>
        <section id="favorite">
        <div className="container">
            <div className="fovarite_header">
                <h3 className="sub_header">Pilihan konsumen</h3>
                <h2 className="heading">Residen Favorit</h2>
            </div>
            <div className="favorite_wrapper">
                <div className="fovrite_img">
                    <div className="favorite_main">
                        <div className="fovorite_one">
                            <picture>
                                <img src={item1} alt="not found"/>
                            </picture>
                        </div>
                        <div className="fovorite_two">
                            <picture>
                                <img src={item2} alt="not found"/>
                            </picture>
                        </div>
                    </div>
                </div>
                <div className="fovrite_content">
                    <h2>Bangunan yang dirancang oleh Aristektur Handal</h2>
                    <p>Tanpa diragukan, properti yang disediakan dalam webiste kami merupakan hasil kerjasama secara profesional dengan para Arsitektur ternama dan Developer yang terpercaya.</p>
                    <div className="fovrite_btn">
                        <a href="#" className="common_btn"><i className="fa-solid fa-phone"></i> Hubungi Kami</a>
                        <a href="#" className="common_btn">Explore lebih banyak</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
