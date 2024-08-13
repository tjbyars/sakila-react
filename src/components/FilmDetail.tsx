import { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Film } from '../components/Types';
import { ActorData } from './Types'
import { BASE_URL } from '../api';
import setBackgroundColor from './BackgroundColour';
import TinyActorCard from './TinyActorCard';

interface FilmDetail {
    id: number;
    title: string;
    description: string;
    cast: ActorData[];
    length: number;
    language: string;
};

function FilmDetail() {

    setBackgroundColor({color: "#657A9A"})

    const { id } = useParams<{ id: string }>();
    const [film, setFilm] = useState<Film | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const url = useLocation().pathname;

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

    function deleteFilm() {
        let deleteURL: String = `${BASE_URL}${url}`;
        fetch(`${deleteURL}`,
        {method: "DELETE"})
    }

    return (
        <div className="film">
            {film ? (
                <>
                    <h1 id="filmTitle">
                        {film.title}
                    </h1>
                    <p id="filmDescription">
                        {film.description}
                    </p>
                    <p id="filmExtraDetails">
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
                                        <TinyActorCard
                                            firstName={actor.firstName}
                                            lastName={actor.lastName}
                                        />
                                    </Link>
                                </p>
                            ))
                        ) : (
                            'No actors found'
                        )}
                    </div>
                    <br /><br />
                    <Link to={`/films`}>
                        <button onClick={() => deleteFilm()}>
                            Delete Film
                        </button>
                    </Link>
                </>
            ) : (
                <div>No film found</div>
            )}
        </div>
    );

};
export default FilmDetail;