import img from "../assets/coder.jpg";

const Hero = () => {
    return (
        <>
            <div className="flex mt-5 sm:flex sm:justify-center">
                <div className="flex flex-col items-center mr-10 ml-10 sm:items-start sm:w-96 lg:w-[30rem]   ">
                    <h1 className="font-semibold text-3xl text-violet-900 lg:text-4xl">
                        News verse{" "}
                    </h1>
                    <p className="text-center text-neutral-500 sm:text-start lg:text-lg">
                        News verse is a news app where you can read any kind of news related
                        to Technology, Science, Education , Politics and many more... ,
                        Click read more to read more about it{" "}
                    </p>
                    <div className="flex justify-center mt-2">
                        <button className="bg-violet-900 pt-1 pb-1 pr-2 pl-2 ml-2 text-white rounded font-medium sm:ml-0 sm:mr-2 xl:pt-2 xl:pb-2 ">
                            News
                        </button>
                        <button className="bg-white border pt-1 pb-1 pr-2 pl-2 ml-2 text-black rounded font-medium sm:ml-0 sm:mr-0 xl:pt-2 xl:pb-2">
                            Read More
                        </button>
                    </div>
                </div>
                <div className="hidden sm:inline-block mr-10">
                    <img
                        src={img}
                        alt="hero-section"
                        className=" sm:w-52 md:w-60 xl:w-72 2xl:w-96"
                    />
                </div>
            </div>
        </>
    );
};

export default Hero;
