import React, { useEffect, useState } from 'react';
import requests from '../Requests';
import axios from 'axios';

const Main = () => {
    const [movies, setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random() * movies.length - 1)];
    useEffect(() => {
        axios
            .get(requests.requestPopular)
            .then(response => setMovies(response.data.results));
        console.log('movies : ', movies, movie?.backdrop_path);
    }, []);

    // reduce string length for beautiful display
    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };

    return (
        <div className="w-full h-[550px] text-white">
            <div className="w-full h-full">
                <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
                <img
                    className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title}
                />
            </div>

            <div className="absolute w-full top-[20%] p-4 md:p-8">
                <h1 className="font-bold text-3xl md:text-4xl">
                    {movie?.title}
                </h1>
                <div className="my-4">
                    <button className="border cursor-pointer hover:bg-gradient-to-r from-blue-400 to-blue-500 font-bold bg-gray-300 hover:transition-colors  hover:border-transparent hover:duration-500 translate-x-1.5 text-black border-gray-300 px-4 py-2 rounded mr-4">
                        Play
                    </button>
                    <button className="btn py-2 border relative inline-flex items-center justify-start overflow-hidden font-medium transition-all  rounded hover:bg-gray-500 group  px-5">
                        <span className="w-56 h-48 rounded bg-gray-700 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left  transition-colors duration-300 ease-in-out group-hover:text-white">
                            Watch Later
                        </span>
                    </button>
                </div>
                <p className="text-gray-400 text-sm">
                    Released : {movie?.release_date}
                </p>
                <p className="w-full  md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
                    {truncateString(movie?.overview, 150)}
                </p>
            </div>
        </div>
    );
};

export default Main;
