

const Features = () => {
  return (
    <div id="about-page" className="w-full min-h-screen pt-16 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-montserrat font-bold pb-5">Why Audible?</h1>
      <div className="h-[80%] w-[90%] flex flex-col items-center justify-center py-3 gap-3">

        <div className="h=[30%] w-full md:w-[80%] rounded-2xl bg-[gainsboro] py-4 flex  md:flex-row items-center justify-evenly">
          <div className="w-[40%] md:w-[50%]">
            <h1 className="text-xl md:text-4xl w-fit font-lexend bg-black text-white px-3 pb-1 rounded">
              Sleek Design.
            </h1>
            <p className="text-sm md:text-xl font-inter pt-2">
              Engineered and Crafted for longing Comfort and Feel.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1693621947585-7b7d94149af4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="size-[40%] md:size-[30%] rounded"
          />
        </div>

        <div className="h=[30%] w-full md:w-[90%] bg-black py-4 flex items-center justify-evenly rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1625786682948-2168238883d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="h-40 md:h-54 w-[30%] object-cover rounded"
          />
          <div className="w-[50%]">
            <h1 className="text-2xl md:text-4xl bg-white px-3 pb-1 rounded w-fit font-semibold font-lexend">
              Pure Auditory Bliss.
            </h1>
            <p className="text-white text-sm md:text-xl font-inter pt-2">
              Immerse yourself in flawless, high-fidelity audio crafted to
              reveal every hidden layer of sound.
            </p>
          </div>
        </div>

        <div className="h=[30%] w-full md:w-[80%] bg-[gainsboro] py-4 flex flex-col-reverse md:flex-row items-center justify-evenly rounded-2xl">
          <div className="w-[90%] md:w-[50%] flex flex-row items-center justify-center gap-3 md:flex-col">
            <h1 className="text-white bg-black px-3 pb-1 w-[40%] md:w-fit rounded text-xl md:text-3xl font-lexend">
              Engineered for Every Obsession.
            </h1>
            <p className="text-sm w-[60%] md:w-fit md:text-[18px] font-inter md:pt-2">
              From Sound Bars to Portable Speakers, we build uncompromising
              hardware for those who demand more.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="size-[50%] md:size-[30%] mb-3 rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default Features