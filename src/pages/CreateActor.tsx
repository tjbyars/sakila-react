import { Link } from 'react-router-dom';

function Menu() {

    return (
        <div className="actor">
            <h1>Create an actor</h1>
            <h2>
                <Link to={`/actors`} >
                    Actors
                </Link>
            </h2>
            <h2>
                <Link to={`/films`} >
                    Films
                </Link>
            </h2>
        </div>
    );
}

export default Menu;
