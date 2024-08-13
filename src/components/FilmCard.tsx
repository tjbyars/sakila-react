

function FilmCard(id: number, title: String, release_year: number) {
    return (
        <div>
            <div>
                <h3>{title} ({release_year})</h3>
                <p>
                    ID: {id}
                </p>
            </div>
            <br></br>
        </div>
    );
};
export default FilmCard

