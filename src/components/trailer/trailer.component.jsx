import React, {useState, useContext} from 'react'
import YouTube from 'react-youtube'
import TrailerButton from '../trailerButton/trailerButton.component';
import { MovieContext } from '../../context/movieContext';
import { IMAGE_PATH } from '../../constants/constants';
import './trailer.component.scss';

export default function TrailerComponent() {
    const { selectedMovie, trailer } = useContext(MovieContext);
    const [playing, setPlaying] = useState(false);

    return (
        <div
            className="viewtrailer"
            style={{
                backgroundImage: `url("${IMAGE_PATH}${selectedMovie.backdrop_path}")`,
                height: '95vh',

            }}
        >
            {playing ? (
                <>
                    <YouTube
                        videoId={trailer.key}
                        className="reproductor container"
                        containerClassName={"youtube-container amru"}
                        opts={{
                            width: "100%",
                            height: "100%",
                            playerVars: {
                                autoplay: 1,
                                controls: 0,
                                cc_load_policy: 0,
                                fs: 0,
                                iv_load_policy: 0,
                                modestbranding: 0,
                                rel: 0,
                                showinfo: 0,
                            },
                        }}
                    />
                    <button onClick={() => setPlaying(false)} className="boton">
                        Close
                    </button>
                </>
            ) : (
                <TrailerButton
                    movie={selectedMovie}
                    trailer={trailer}
                    playing={playing}
                    setPlaying={setPlaying}
                />
            )}
    </div>
  )
}
