import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ActorData } from './components/Types';
import { BASE_URL } from './api';
import setBackgroundColor from './components/BackgroundColour';

function Home() {

    setBackgroundColor({color: "#659A6B"});

    const [actors, setActors] = useState<ActorData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`${BASE_URL}/actors`)
        .then(response => response.json())
        .then((data: ActorData[]) => {
            setActors(data);
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
        <div className="actor">
            <h1>Actors List</h1>
            <h2>
                Add an actor:
            </h2>
            <Link to={`/create/actor`}>
                Add Actor
            </Link>
            <h2>Actors:</h2>
                {actors.map(actor => (
                    <p key={actor.id}>
                        <Link to={`/actors/${actor.id}`}>
                            {actor.firstName} {actor.lastName}
                        </Link>
                    </p>
                ))}
        </div>
    );
}

export default Home;
