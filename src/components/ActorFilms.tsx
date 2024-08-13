import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ActorData, Film } from './Types';
import FilmCard from './FilmCard';
import { BASE_URL } from '../api';
import setBackgroundColor from './BackgroundColour';

function ActorFilms() {

    setBackgroundColor({color: "#659A6B"});

    const { id } = useParams<{ id: string }>();
    const [data, setData] = useState<ActorData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`${BASE_URL}/actors/${id}`)
        .then(response => response.json())
        .then((data: ActorData) => {
            setData(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>
                Actor: {data ? `${data.firstName} ${data.lastName}` : 'Loading...'}
            </h1>
            <div>
                {data && data.films ? (
                    data.films.map((film: Film) => (
                        <div key={film.id}>
                            <Link to={`/films/${film.id}`}>
                                <FilmCard
                                    id={film.id}
                                    title={film.title}
                                    release_year={film.release_year}
                                />
                            </Link>
                        </div>
                    ))
                ) : (
                    'No films found'
                )}
            </div>
        </div>
    );
}

export default ActorFilms;
