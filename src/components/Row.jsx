import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import Movie from './Movie';

const Row = ({ title, fetchURL }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchURL).then(response => {
            console.log('image : ', response.data.results);
            setMovies(response.data.results);
        });
    }, [fetchURL]);

    return (
        <div className="w-full h-full bg-gray-950">
            <h3 className="text-white font-bold md:text-xl p-4">{title}</h3>
            <MdChevronLeft
                className="bg-gray-600 hover:bg-gray-500 hover:text-white rounded-full cursor-pointer"
                size={40}
            />
            <div
                id={'slider'}
                className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
            >
                {movies.map((item, id) => (
                    <Movie key={id} item={item} />
                ))}
            </div>
            <MdChevronRight
                className="bg-gray-600 hover:bg-gray-500 hover:text-white rounded-full cursor-pointer"
                size={40}
            />
        </div>
    );
};

export default Row;
