import '../App.css'
import { BASE_URL } from '../api';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import setBackgroundColor from '../components/BackgroundColour';

function CreateFilm() {

    setBackgroundColor({color: "#657A9A"})

    // const [formData] = useState({
    //     title: '',
    //     description: '',
    //     release_year: '',
    //     language: '',
    //     rental_duration: '',
    //     rental_rate: '',
    //     length: '',
    //     replacement_cost: '',
    //     rating: '',
    //     special_features: '',
    // })

    function submitFilm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const formElements = form.elements as typeof form.elements & {
            title: {value: String},
            description: {value: String},
            release_year: {value: String},
            language: {value: String},
            rental_duration: {value: String},
            rental_rate: {value: String},
            length: {value: String},
            replacement_cost: {value: String},
            rating: {value: String},
            special_features: {value: String},
        }
        console.log("hello")
        console.log(formElements.title.value)
        fetch(`${BASE_URL}/films`,{
            method: "POST",
            headers: {
                "Accept": "application/json",
            },
            body: JSON.stringify({
                title: formElements.title.value,
                description: formElements.description.value,
                release_year: formElements.release_year.value,
                language: formElements.language.value,
                rental_duration: formElements.rental_duration.value,
                rental_rate: formElements.rental_rate.value,
                length: formElements.length.value,
                replacement_cost: formElements.replacement_cost.value,
                rating: formElements.rating.value,
                special_features: formElements.special_features.value,
            })
            // body: JSON.stringify({
            //     title: formData.title,
            //     description: formData.description,
            //     release_year: formData.release_year,
            //     language: formData.language,
            //     rental_duration: formData.rental_duration,
            //     rental_rate: formData.rental_rate,
            //     length: formData.length,
            //     replacement_cost: formData.replacement_cost,
            //     rating: formData.rating,
            //     special_features: formData.special_features,
            // })
        });
    }

    return (
        <div className="film">
            <h1>Add a Film</h1>

            <form id="newFilmForm" onSubmit={submitFilm}>

                <label>Film title:<br />
                    <input type="text" id="title" /><br />
                </label>

                <label>Description:<br />
                    <input type="text" id="description" /><br />
                </label>

                <label>Release year:<br />
                    <input type="number" id="release_year" /><br />
                </label>

                <label>Language:<br />
                    <select id="language">
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Italian">Italian</option>
                    </select>
                </label><br />

                <label>Rental duration:<br />
                    <input type="number" id="rental_duration" /><br />
                </label>

                <label>Rental rate:<br />
                    <input type="number"  id="rental_rate"/><br />
                </label>

                <label>Length (mins):<br />
                    <input type="number"  id="length" /><br />
                </label>

                <label>Replacement cost:<br />
                    <input type="number"  id="replacement_cost" /><br />
                </label>

                <label>Rating:<br />
                    <select id="rating">
                        <option value="G">G</option>
                        <option value="PG_13">PG-13</option>
                        <option value="PG">PG</option>
                        <option value="R">R</option>
                        <option value="NC_17">NC-17</option>
                    </select>
                </label><br />

                <label>Special features: </label><br />
                <label className="justify">Behind the Scenes</label>
                <input type="checkbox" value="behind_the_scenes" id="behind_the_scenes" />
                <label className="justify">Deleted Scenes</label>
                <input type="checkbox" value="deleted_scenes" id="deleted_scenes" />
                <label className="justify">Trailers</label>
                <input type="checkbox" value="trailers" id="trailers" />
                <label className="justify">Commentaries</label>
                <input type="checkbox" value="commentaries" id="commentaries" /><br />

                <label>Cast (separate with commas):</label><br />
                <input type="text" id="cast" /><br /><br />

                {/* <Link to={`/films/1`}> */}
                <input type="submit" value="Add Film"  id="submit" />
                {/* </Link> */}
                <br />
            </form>
        </div>
    );
}
export default CreateFilm;

// id: number;
// title: string;
// release_year: number;
// description: string;
// cast: ActorData[];
// language: {
//     id: number;
//     name: string;
// }
// rental_duration: number;
// rental_rate: number;
// length: number;
// replacement_cost: number;
// rating: "G" | "PG_13" | "PG" | "R" | "NC_17";
// special_features: string[];