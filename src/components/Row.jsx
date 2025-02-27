import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import Movie from './Movie';

const Row = ({ title, fetchURL, rowID }) => {
    const [movies, setMovies] = useState([]);
    const slider = useRef(null);

    // while clicking the left or right arrows , then this function will be performed
    const slide = direction => {
        if (slider.current) {
            const scrollAmount = 500; // Adjust scroll distance
            slider.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        axios.get(fetchURL).then(response => {
            setMovies(response.data.results);
        });
    }, [fetchURL]);

    return (
        <div className="w-full relative h-full bg-gray-950">
            <h3 className="text-white font-bold md:text-xl p-4">{title}</h3>
            <MdChevronLeft
                className="absolute opacity-50 hover:opacity-100 z-10 top-1/2  left-2 bg-gray-600 hover:bg-gray-500 hover:text-white rounded-full cursor-pointer"
                size={40}
                onClick={() => slide('left')} //slide function call for left arrow
            />
            <div
                ref={slider}
                className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
            >
                {movies.map((item, id) => (
                    <Movie key={id} item={item} rowID={rowID} />
                ))}
            </div>
            <MdChevronRight
                className="absolute opacity-50 hover:opacity-100 right-2 z-10 top-1/2  bg-gray-600 hover:bg-gray-500 hover:text-white rounded-full cursor-pointer"
                size={40}
                onClick={() => slide('right')} //slide function call for right arrow
            />
        </div>
    );
};

export default Row;
