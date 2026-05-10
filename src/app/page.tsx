import Divider from "./components/divider"
import AboutMe from "./components/home/about-me"

import HeroSection from "./components/home/hero-section"
import PelatihanKursus from "./components/home/pelatihan-kursus"
import Portofolio from "./components/home/portofolio"


const page = () => {
  return (
    <main>
      <HeroSection/>
      <Divider/>
      <AboutMe/>
      <Divider/>
      
      <Portofolio/>
   
      
     
      
      <PelatihanKursus/>
     
      
      
    </main>
  )
}

export default page