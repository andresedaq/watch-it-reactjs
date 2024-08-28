import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL, API_KEY, URL_IMAGE } from '../../constants/constants';
import { MovieContext } from '../../context/movieContext';
import './movieCard.component.scss';

export default function MovieCard({ movie }) {
    const { setSelectedMovie, setTrailer, selectedMovie } = useContext(MovieContext);
    const [loading, setLoading] = useState(false);

    const fetchMovie = async (id) => {
        setLoading(true);
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
        setLoading(false);
    };

    const selectMovie = async (id) => {
        await fetchMovie(id);
        window.scrollTo(0, 0);
    };

    return (
        <div
            key={movie.id}
            className="col-md-4 mb-3"
            onClick={() => selectMovie(movie.id)}
        >
            <img
                src={`${URL_IMAGE + movie.poster_path}`}
                alt=""
                height={600}
                width="100%"
            />
            <h4 className="text-center">{movie.title}</h4>
            {loading && <p>Loading...</p>}
        </div>
    );
}
