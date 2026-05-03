import { Link } from "react-router-dom";

const HomeProducts = () => {
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
    <div
      id="products-page"
      className="w-full min-h-screen pt-16 pb-10 flex flex-col items-center"
    >
      <h1 className="text-center text-2xl md:text-4xl font-montserrat font-bold pb-5 px-4">
        Products We Engineered
      </h1>

      {/* 
        Mobile:  2 columns, items stack vertically (grid-cols-2)
        Desktop: 4 columns, two visual rows of 4  (md:grid-cols-4)
      */}
      <div className="w-[95%] grid grid-cols-2 md:grid-cols-4 gap-4">
        {bestsellers.map((product, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-2xl flex flex-col items-center p-3 gap-3"
          >
            {/* aspect-square keeps the image proportional at any width */}
            <div className="w-full aspect-square overflow-hidden rounded-xl">
              <img
                src={product.Img}
                alt={product.Name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full flex flex-col items-center gap-1 px-1">
              <h2 className="text-center text-xs sm:text-sm md:text-base lg:text-lg font-montserrat font-semibold leading-tight">
                {product.Name}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-worksans text-white bg-[#363636] px-2 py-0.5 rounded">
                ₹{product.Price.toLocaleString("en-IN")}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Link to="/products" className="text-2xl py-5 underline font-lexend">Explore More Products</Link>
    </div>
  );
};

export default HomeProducts;
