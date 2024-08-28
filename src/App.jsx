import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import './scss/style.scss'
import './App.css'
import MoviesContainer from './components/moviesContainer/moviesContainer.component';
import TrailerComponent from './components/trailer/trailer.component';
import { MovieContext } from './context/movieContext';
import Navbar from './components/navbar/navbar';

function App() {
    const { selectedMovie, trailer } = useContext(MovieContext);

    useEffect(() => {
        console.log(trailer)
    }, [trailer])


    return (
        <div>
            {selectedMovie ? (
                <Navbar />
            ) : null}
            <div>
                <main>
                    {selectedMovie ? (
                        <TrailerComponent />
                    ) : null}
                </main>
            </div>
            <MoviesContainer />
        </div>
    );
}

export default App;