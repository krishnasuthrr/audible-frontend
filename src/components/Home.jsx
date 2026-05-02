import { useEffect } from "react"
import Features from "./Features"
import Hero from "./Hero"
import { useLocation } from "react-router-dom"
import HomeProducts from "./HomeProducts"


const Home = () => {

    const location = useLocation()

    useEffect(() => {
      if (location.hash) {
        const targetId = location.hash.substring(1);

        const element = document.getElementById(targetId);

        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, [location]);

  return (
    <div className="w-full h-auto">
        <Hero />
        <Features />
        <HomeProducts />
    </div>
  )
}

export default Home