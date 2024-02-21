import { Author } from "./section/author/Author"
import Banner from "./section/banner/Banner"
import { Favorite } from "./section/favorite/Favorite"
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
    </>
  )
}

export default App