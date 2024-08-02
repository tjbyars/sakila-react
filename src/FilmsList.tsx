import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Film } from './components/Types';
import { BASE_URL } from './api';

function Home() {
    const [films, setFilms] = useState<Film[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`${BASE_URL}/films`)
        .then(response => response.json())
        .then((data: Film[]) => {
            setFilms(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching data: ', error);
            setError(error.message);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="film">
            <h1>Films List</h1>
            <h2>
                Add a film:
            </h2>
            <Link to={`/create/film`}>
                Add Film
            </Link>
            <h2>Films:</h2>
                {films.map(film => (
                    <p key={film.id}>
                        <Link to={`/films/${film.id}`}>
                            {film.title}
                        </Link>
                    </p>
                ))}
        </div>
    );
}

export default Home;
