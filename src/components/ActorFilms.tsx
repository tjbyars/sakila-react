import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ActorData, Film } from './Types';
import FilmCard from './FilmCard';

function ActorFilms() {
    const { id } = useParams<{ id: string }>();
    const [data, setData] = useState<ActorData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`http://13.40.195.171/api/actors/${id}`)
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
            <h2>
                Actor: {data ? `${data.firstName} ${data.lastName}` : 'Loading...'}
            </h2>
            <div>
                {data && data.films ? (
                    data.films.map((film: Film) => (
                        <div key={film.id}>
                            <Link to={`/films/${film.id}`}>
                                <FilmCard
                                    id={film.id}
                                    title={film.title}
                                    releaseYear={film.releaseYear}
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
