import { Link } from 'react-router-dom';
import './Menu.css'

function Menu() {

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
