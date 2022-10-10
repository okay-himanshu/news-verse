// import img1 from '../assets/1.png'
// import img2 from '../assets/2.png'
// import img3 from '../assets/3.png'
// import img4 from '../assets/4.png'

const CategoryComp = () => {
    return (
       <>
            <div className="flex flex-wrap justify-center">
                <button className="p-1 text-white bg-red-500 rounded mr-2 mt-1 mb-1">Technology</button>
                <button className="p-1 text-white bg-blue-500 rounded mr-2 mt-1 mb-1">Science</button>
                <button className="p-1 text-white bg-green-500 rounded mr-2 mt-1 mb-1">Space</button>
                <button className="p-1 text-white bg-purple-500 rounded mr-2 mt-1 mb-1">META</button>
                <button className="p-1 text-white bg-yellow-500 rounded mr-2 mt-1 mb-1">Automobile</button>
                <button className="p-1 text-white bg-black rounded mr-2 mt-1 mb-1">Politics</button>
            </div>
       </>
    )
}

export default CategoryComp;