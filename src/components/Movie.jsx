import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
const Movie = ({ item, rowID }) => {
    const [like, setLike] = useState(false);

    return (
        <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative group p-2">
            <img
                className="w-full h-auto block object-cover "
                src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                alt={item?.title}
            />
            <div className="absolute p-2 top-0 left-0 w-full h-full ">
                <p className="w-full h-full flex justify-center items-center text-white text-xs md:text-sm lg:text-xl opacity-0 hover:opacity-100 hover:text-xl hover:bg-gray-950 transition-all duration-300">
                    {item?.title.slice(0, 20)}
                </p>
                <p className="absolute cursor-pointer opacity-0 disabled group-hover:opacity-100 group-hover:enabled  top-4 left-4 text-gray-300">
                    {like ? <FaHeart /> : <FaRegHeart />}
                </p>
            </div>
        </div>
    );
};

export default Movie;
