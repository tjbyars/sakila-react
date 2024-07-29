const FilmCard = ({id, title, releaseYear}: any) => {
    return (
        <div>
            <div>
                <h4>ID: {id}</h4>
            </div>
            <div>
                <h3> {title} ({releaseYear})</h3>
            </div>
            <br></br><br></br>
        </div>
    );
};
export default FilmCard