import React from "react";
import { useGlobalContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import image404 from "../assets/image404.png";

const NewsCard = () => {
  const { data, state, setState, loader } = useGlobalContext();
  const navigate = useNavigate();

  const handleLoadMore = () => {
    setState(state + 3);
  };

  return (
    <>
      {loader ? (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {data.map((news, index) => {
            const {
              author,
              title,
              description,
              url,
              urlToImage,
              content,
              source,
            } = news;

            console.log(source);
            return (
              <div
                className="rounded overflow-hidden shadow-lg hover:-translate-y-2 transition-all delay-75 hover:bg-slate-100"
                key={index}
              >
                <img
                  className="w-full"
                  src={urlToImage ? urlToImage : image404}
                  alt="image"
                />
                <div className="px-6 py-2">
                  <div className="font-semibold text-xl mb-2 ">
                    {title.slice(0, 40) + "..."}
                  </div>
                  <p className="text-gray-700 text-base">
                    {content.slice(0, 200)}
                  </p>
                </div>
                <div className="px-6 pt-0 pb-0">
                  <p className="text-gray-700 text-base underline">
                    source : {source.name ? source.name : "source not found"}
                  </p>
                </div>
                <div className="px-6 pt-2 pb-10">
                  <button
                    className="bg-violet-900 p-1 text-white font-medium rounded"
                    onClick={() => navigate(window.open(url))}
                  >
                    Read more
                  </button>
                </div>
              </div>
            );
          })}
          <button
            onClick={handleLoadMore}
            className="bg-violet-900 p-1 text-white font-medium rounded  w-24"
          >
            Load More
          </button>
        </div>
      ) : (
        <div className="w-full flex justify-center">
          <ThreeDots width="80" height="90" color="blue" />
        </div>
      )}
    </>
  );
};

export default NewsCard;
