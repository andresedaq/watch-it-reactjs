import React, { createContext, useState } from 'react';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [trailer, setTrailer] = useState(null);

    return (
        <MovieContext.Provider value={{ selectedMovie, setSelectedMovie, trailer, setTrailer }}>
            {children}
        </MovieContext.Provider>
    );
};

export { MovieContext, MovieProvider };
