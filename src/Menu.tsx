import { Link } from 'react-router-dom';
import './Menu.css'
import './components/BackgroundColour'
import setBackgroundColor from './components/BackgroundColour';

function Menu() {

    setBackgroundColor({color: "#9a6594"});

    return (
        <div>
            <h1>Welcome to the Actors & Films Database</h1>
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
