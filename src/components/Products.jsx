import { useState } from "react";

const Products = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const bestsellers = [
    {
      Name: "Sony WH-1000XM5 Wireless Headphones",
      Price: 31990,
      Img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80",
    },
    {
      Name: "Apple AirPods Pro (2nd Generation)",
      Price: 24900,
      Img: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&q=80",
    },
    {
      Name: "JBL Flip 6 Portable Bluetooth Speaker",
      Price: 8999,
      Img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    },
    {
      Name: "OnePlus Bullets Wireless Z2 Neckband",
      Price: 1599,
      Img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&q=80",
    },
    {
      Name: "Bose QuietComfort 45 Over-Ear Headphones",
      Price: 29900,
      Img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80",
    },
    {
      Name: "Samsung Galaxy Buds 2 Pro Earbuds",
      Price: 16999,
      Img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
    },
    {
      Name: "Amazon Echo Dot (5th Gen) Smart Speaker",
      Price: 5499,
      Img: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=500&q=80",
    },
    {
      Name: "Beats Fit Pro True Wireless Earbuds",
      Price: 21500,
      Img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    },
  ];

  return (
    <div className="pt-16 w-full min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-montserrat font-semibold py-5">Products.</h1>

      {/* Hamburger button — visible only on md and below */}
      <div className="w-[90%] flex lg:hidden mb-3">
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-[#2e2e2e] text-white rounded-xl font-worksans text-sm hover:bg-black transition-colors duration-300"
        >
          {/* Hamburger / X icon */}
          <div className="flex flex-col gap-1 w-4">
            {filtersOpen ? (
              // X icon
              <span className="text-white text-lg leading-none">✕</span>
            ) : (
              // Hamburger lines
              <>
                <span className="block h-0.5 w-full bg-white rounded" />
                <span className="block h-0.5 w-full bg-white rounded" />
                <span className="block h-0.5 w-full bg-white rounded" />
              </>
            )}
          </div>
          Filters
        </button>
      </div>

      {/* Slide-down filter drawer — md and below only */}
      <div
        className={`w-[90%] lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          filtersOpen ? "max-h-96 mb-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white rounded-2xl border p-4">
          <h2 className="text-2xl font-medium font-inter mb-3">Filters</h2>
          {/* Filter content goes here */}
          <p className="text-sm text-gray-400 font-inter">
            Filter options coming soon...
          </p>
        </div>
      </div>

      {/* Main layout */}
      <div className="w-[90%] flex-1 flex justify-between items-start gap-4">
        {/* Sidebar — sticky, visible on lg and above only */}
        <div className="hidden lg:block w-[30%] sticky top-16 self-start max-h-[calc(100vh-4rem)] overflow-y-auto bg-white rounded-2xl border p-3">
          <h2 className="text-3xl font-medium font-inter">Filters</h2>
          {/* Filter content goes here */}
        </div>

        {/* Products grid */}
        <div className="w-full lg:w-[65%] bg-[gainsboro] rounded-2xl p-3 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bestsellers.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border flex flex-col p-3"
            >
              <img
                className="w-full aspect-square object-cover rounded-xl"
                src={product.Img}
                alt={product.Name}
              />
              <div className="w-full flex flex-col items-center mt-2">
                <h1 className="font-medium font-montserrat text-center text-sm md:text-base lg:text-lg">
                  {product.Name}
                </h1>
                <p className="font-inter text-base lg:text-lg font-semibold">
                  ₹{product.Price.toLocaleString("en-IN")}
                </p>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-evenly py-2 gap-1">
                <button className="flex-1 text-xs md:text-sm py-1.5 bg-[#2e2e2e] cursor-pointer text-white rounded-xl font-worksans hover:bg-black transition-colors duration-300">
                  Buy Now
                </button>
                <button className="flex-1 text-xs md:text-sm py-1.5 bg-[#2e2e2e] cursor-pointer text-white rounded-xl font-worksans hover:bg-black transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
