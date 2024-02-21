import { Partnership } from "./section/Partnership/Partnership"
import { Author } from "./section/author/Author"
import Banner from "./section/banner/Banner"
import { Favorite } from "./section/favorite/Favorite"
import { Footer } from "./section/footer/Footer"
import { Navbar } from "./section/navbar/Navbar"
import { Property } from "./section/property/Property"



const App = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Property/>
      <Favorite/>
      <Author/>
      <Partnership/>
      <Footer/>
    </>
  )
}

export default App