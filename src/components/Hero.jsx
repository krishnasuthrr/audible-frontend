import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div id="home-page" className="pt-16 w-full min-h-screen flex justify-center">
      <div className="w-[90%] bg-[gainsboro] rounded-2xl flex flex-col md:flex-row items-center justify-center gap-5">
        <div className="md:w-[50%] h-auto px-3">
          <span className="text-3xl lg:text-4xl font-extrabold font-montserrat">
            Immersive Sound,
          </span>{" "}
          <br />
          <span className="text-3xl lg:text-4xl text-white bg-black rounded px-2 pb-1 font-extrabold font-montserrat">
            Timeless Design.
          </span>
          <h3 className="font-inter pb-3 pt-2 text-[20px] lg:text-[25px] font-medium">
            The Science of Pure Audio
          </h3>
          <span className="font-montserrat lg:text-[20px] font-medium">
            "Designed for those who demand uncompromising audio performance"
          </span>
          <button className="hidden md:block text-white bg-[#373737] px-5 py-2 mt-5 font-worksans rounded-xl cursor-pointer hover:bg-black transition-colors duration-300">
            <Link to="/#products-page">Explore Products</Link>
          </button>
        </div>
        <div className="md:w-[30%] flex flex-col items-center">
          <img
            src="https://png.pngtree.com/png-vector/20250321/ourmid/pngtree-wireless-headphone-png-image_15830312.png"
            alt=""
            className="w-75 h-75 object-cover"
          />
          <button className="md:hidden text-white bg-[#282828] px-3 py-1 rounded-xl mt-10 font-worksans">
            <Link to="/#products-page">Explore Products</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero