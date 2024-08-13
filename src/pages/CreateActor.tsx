import { Link } from 'react-router-dom';
import setBackgroundColor from '../components/BackgroundColour';

function Menu() {

    setBackgroundColor({color: "#659A6B"})

    return (
        <div className="actor">
            <h1>Create an actor</h1>
            <p>
                This page is still under construction, please come back later
            </p>
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
