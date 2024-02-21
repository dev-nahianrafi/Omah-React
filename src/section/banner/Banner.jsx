import "./banner.css"
import bannerimg from "../../assets/images/banner.png"

const Banner = () => {
  return (
    <>
        <section id="banner">
        <div className="container">
            <div className="banner_wrapper">
                <div className="banner_content">
                    <h1>Temukan Hunian Keluarga Sesuai Keinginanmu</h1>
                    <p>Menyediakan hunian bagi keluarga anda dengan varian pilihan dan lokasi yang strategis di kota anda dengan cara yang lebih mudah.</p>
                    <div className="banner_search">
                        <form action="#">
                            <input type="text" placeholder="Search location, properties, residental group"/>
                            <i className="fa-solid fa-location-dot"></i>
                            <button type="submit">Search</button>
                        </form>
                    </div>
                    <div className="counter_wrapper">
                        <div className="counter_item">
                            <span>200 <span>+</span></span>
                            <p>Residental grup telah bergabung</p>
                        </div>
                        <div className="counter_item">
                            <span>10 <span>+</span></span>
                            <p>Residental grup telah bergabung</p>
                        </div>
                        <div className="counter_item">
                            <span>999 <span>+</span></span>
                            <p>Properti tersedia di berbagai Kota</p>
                        </div>
                    </div>
                </div>
                <div className="banner_image">
                    <picture>
                        <img src={bannerimg} alt="#"/>
                    </picture>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner

