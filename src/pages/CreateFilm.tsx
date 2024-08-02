import '../App.css'
import { BASE_URL } from '../api';
import { useState } from 'react'

function CreateFilm() {
    const [formData] = useState({
        title: '',
        description: '',
        release_year: '',
        language: '',
        rental_duration: '',
        rental_rate: '',
        length: '',
        replacement_cost: '',
        rating: '',
        special_features: '',
    })

    function submitFilm() {
        const postData = new FormData();
        postData.append('title', formData.title);
        console.log(postData)
        fetch(`${BASE_URL}/films`,{
            method: "POST",
            body: postData,})
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
                    <select id="Language">
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Italian">Italian</option>
                    </select>
                </label><br />

                <label>Rental duration:<br />
                    <input type="number" /><br />
                </label>

                <label>Rental rate:<br />
                    <input type="number" /><br />
                </label>

                <label>Length (mins):<br />
                    <input type="number" /><br />
                </label>

                <label>Replacement cost:<br />
                    <input type="number" /><br />
                </label>

                <label>Rating:<br />
                    <select id="Rating">
                        <option value="G">G</option>
                        <option value="PG_13">PG-13</option>
                        <option value="PG">PG</option>
                        <option value="R">R</option>
                        <option value="NC_17">NC-17</option>
                    </select>
                </label><br />

                <label>Special features: </label><br />
                <label className="justify">Behind the Scenes</label>
                <input type="checkbox" value="bts" />
                <label className="justify">Deleted Scenes</label>
                <input type="checkbox" value="bts" />
                <label className="justify">Trailers</label>
                <input type="checkbox" value="bts" />
                <label className="justify">Commentaries</label>
                <input type="checkbox" value="bts" /><br />

                <label>Cast (separate with commas):</label><br />
                <input type="text" id="cast" />

                <br /><input type="submit" value="Add Film" /><br />

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