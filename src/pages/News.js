import { useGlobalContext } from '../context/Context'
import {useNavigate} from 'react-router-dom'

const News = () => {
  const { data } = useGlobalContext();

  const navigate = useNavigate();

  return (
    <>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {
          data.map((news, index) => {
            const { author, title, description, url, urlToImage, content, publishedAt } = news;
            return (
              <>
                <div className="rounded overflow-hidden shadow-lg">
                  <img className="w-full" src={urlToImage} alt="Mountain" />
                  <div className="px-6 py-2">
                    <div className="font-semibold text-xl mb-2 ">{title.slice(0, 40)+"..."}</div>
                    <p className="text-gray-700 text-base">
                     {content.slice(0,150)+"..."}
                    </p>
                  </div>
                  <div className='px-6 pt-0 pb-0'>
                    <p className='text-gray-700 text-base underline'>author : {author}</p>
                  </div>
                  <div className="px-6 pt-2 pb-10">
                    <button className='bg-violet-900 p-1 text-white font-medium rounded' onClick={()=>navigate(window.open(url))}>Read more</button>
                  </div>
                  
                </div>
              </>
            )
          })
        }
      </div>

    </>
  )
}

export default News;