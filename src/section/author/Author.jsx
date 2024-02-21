import "./author.css"
import img5 from "../../assets/images/image 5.png"
import img6 from "../../assets/images/image 6.png"
import img7 from "../../assets/images/image 7.png"
export const Author = () => {
  return (
    <>
        <section id="aurthor">
        <div className="container">
            <div className="aurthor_header">
                <h3 className="sub_header">Pilihan Auditor</h3>
                <h2 className="heading">Residen Berbagai Kota</h2>
            </div>
            <div className="aurthor_wrapper">
                <div className="aurthor_item">
                    <div className="aurthor_img">
                        <picture>
                            <img src={img5} alt="not found"/>
                        </picture>
                    </div>
                    <h3>Magnolia Surabaya</h3>
                    <p>Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec. Jatiuwung, Kota Tangerang, Banten 15136</p>
                </div>
                <div className="aurthor_item">
                    <div className="aurthor_img">
                        <picture>
                            <img src={img6} alt="not found"/>
                        </picture>
                    </div>
                    <h3>Pinang Residences</h3>
                    <p>Jl. Deplu Raya No.16 RT.5, RW.003 Bintaro, Pesanggrahan, Jakarta Selatan 12330</p>
                </div>
                <div className="aurthor_item">
                    <div className="aurthor_img">
                        <picture>
                            <img src={img7} alt="not found"/>
                        </picture>
                    </div>
                    <h3>South Grove</h3>
                    <p>1 No.1, RT.1/RW.1, Lb. Bulus, Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12440</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
