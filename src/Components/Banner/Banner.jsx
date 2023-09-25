const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[70vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/5xKnNtf/Clothing.png)",
        }}
      >
        <div className="hero-overlay bg-[#FFFFFFF0]"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mb-10 text-5xl text-black font-bold">
              I Grow By Helping People In Need
            </h1>
            <div className="relative w-96 mx-auto">
              <input
                type="text"
                placeholder="Search here...."
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary text-white bg-[#FF444A] absolute top-0 right-0 rounded-l-none border-none">
              Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
