import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ActorData } from './components/Types';
import { BASE_URL } from './api';

function Home() {
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
        <div>
            <h1>Welcome to the Actors & Films Database</h1>
            <p>Select an actor to view their films</p>
            <h2>Actors:</h2>
            <ul>
                {actors.map(actor => (
                    <li key={actor.id}>
                        <Link to={`/actors/${actor.id}`}>
                            {actor.firstName} {actor.lastName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
