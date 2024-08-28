import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import MovieCard from '../movieCard/movieCard.component';
import { MovieContext } from '../../context/movieContext';
import { API_URL, API_KEY } from '../../constants/constants';
import SearchBar from '../searchBar.component/searchBar.component';

export default function MoviesContainer() {
    const { setSelectedMovie, setTrailer } = useContext(MovieContext);
    const [movies, setMovies] = useState([]);
    const [searchKey, setSearchKey] = useState("");

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async (searchKey = "") => {
        const type = searchKey ? "search" : "discover";
        const {
            data: { results },
        } = await axios.get(`${API_URL}/${type}/movie`, {
            params: {
                api_key: API_KEY,
                query: searchKey,
            },
        });

        setMovies(results);

        if (results.length > 0) {
            fetchMovie(results[0].id);
        }
    };

    const fetchMovie = async (id) => {
        const { data } = await axios.get(`${API_URL}/movie/${id}`, {
            params: {
                api_key: API_KEY,
                append_to_response: "videos",
            },
        });

        setSelectedMovie(data);

        if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(
                (vid) => vid.name === "Official Trailer"
            );
            setTrailer(trailer ? trailer : data.videos.results[0]);
        }
    };

    const handleSearchChange = (e) => {
        setSearchKey(e.target.value);
        fetchMovies(e.target.value);  // Llamar a fetchMovies con el valor actualizado
    };


    const searchMovies = (e) => {
        e.preventDefault();
        fetchMovies(searchKey);
    };

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <SearchBar
                    searchKey={searchKey}
                    setSearchKey={setSearchKey}
                    searchMovies={searchMovies}
                    handleSearchChange={handleSearchChange}
                />
            </div>
            <div className="container mt-3">
                <div className="row">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
}
