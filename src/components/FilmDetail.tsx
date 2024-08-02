
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Film } from '../components/Types';
import { ActorData } from './Types'
import { BASE_URL } from '../api';

interface FilmDetail {
    id: number;
    title: string;
    description: string;
    cast: ActorData[];
    length: number;
};

function FilmDetail() {
    const { id } = useParams<{ id: string }>();
    const [film, setFilm] = useState<Film | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`${BASE_URL}/films/${id}`)
        .then(response => response.json())
        .then(data => {
            setFilm(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching film detail:', error);
            setError(error.message);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Film not found</div>;
    }

    function deleteFilm(id: number) {
        fetch(`${BASE_URL}/films/${id}`,
        {method: "DELETE"})
    }

    return (
        <div>
            {film ? (
                <>
                    <h1>
                        {film.title}
                    </h1>
                    <p>
                        {film.description}
                    </p>
                    <p>
                        Release year: {film.release_year} <br></br>
                        Length: {film.length} minutes<br></br>
                        Rating: {film.rating}<br></br>
                        Special Features: {film.special_features}<br></br>
                        {/* Language: {film.language.name} */}
                    </p>
                    <h3>
                        Cast:
                    </h3>
                    <div>
                        {film && film.cast ? (
                            film.cast.map((actor: ActorData) => (
                                <p key={actor.id}>
                                    <Link to={`/actors/${actor.id}`}>
                                        <div>
                                            {actor.firstName} {actor.lastName}
                                        </div>
                                    </Link>
                                </p>
                            ))
                        ) : (
                            'No actors found'
                        )}
                    </div>
                    <button onClick={() => deleteFilm(film.id)}>
                        Delete Film
                    </button>
                </>
            ) : (
                <div>No film found</div>
            )}
        </div>
    );

};
export default FilmDetail;