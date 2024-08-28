import React, { useContext } from 'react';
import { MovieContext } from '../../context/movieContext';
import './trailerbutton.component.scss';
import { FaPlay } from '../icons/icons';

export default function TrailerButton({ setPlaying }) {
    const { selectedMovie, trailer } = useContext(MovieContext);

    return (
        <div className="button">
            <div className="button-container">
                <h1 className="button-title">{selectedMovie.title}</h1>
                <p className="button-overview">{selectedMovie.overview}</p>
                {trailer ? (
                    <button
                        className="button-play"
                        onClick={() => setPlaying(true)}
                        type="button"
                    >
                      <FaPlay size={24} />  Play Trailer
                    </button>
                ) : (
                    "Sorry, no trailer available"
                )}
            </div>
        </div>
    );
}
