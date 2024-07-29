import './App.css';
import FilmDetail from './components/FilmDetail';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import ActorFilms from './components/ActorFilms';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actors/:id" element={<ActorFilms />} />
        <Route path="/films/:id" element={<FilmDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;























// function ActorFilms() {

//   const { id } = useParams<{ id: string } >();
//   const [data, setData] = useState<any>([])
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     fetch('http://localhost:8080/actors/${id}')
//       .then(response => {
//         return response.json();
//       })
//       .then((data: ActorData) => {
//         console.log('Fetched data: ', data);
//         setData(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching data: ', error);
//         setError(error.message);
//         setLoading(false);
//       })
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <>
//       <h2>
//         Actor:
//       </h2>
//       <div>
//         {data ? <pre> {data.firstName + ' ' + data.lastName} </pre> : 'Actor name loading...'}
//       </div>
//       <div>
//         {data && data.films ? (
//           data.films.map((film: Film) => (
//             <div key={film.id}>
//               <Link to={`/films/${film.id}`}>
//                 <FilmCard
//                   id={film.id}
//                   title={film.title}
//                   releaseYear={film.releaseYear}
//                 />
//               </Link>
//             </div>
//           ))
//         ) : (
//           'No films found'
//         )}
//       </div>
//       </>
//   );
// }



// console.log('Fetch response: ', response);
// if (response.status === 302) {
//   const redirectedUrl = response.headers.get('Location');
//   if (redirectedUrl) {
//     return fetch(redirectedUrl);
//   } else {
//     throw new Error('Redirected URL not found');
//   }
// } else if (!response.ok) {
//   throw new Error(`Network response was not ok: Error: ${response.status} ${response.statusText}`);
// } else {
//   return response.json();
// }

{/* <>
<div>
  <p>Search for an actor:</p>
  <input type="text" id="actorName" name="actorName"></input>
  <br></br><br></br>
  <input type="submit" value="Search"></input>
</div>
<h1>
  Actor:
</h1>
<div>
  {data ? <pre> {data.firstName + " " + data.lastName} </pre> : 'Temp...'}
</div>
<div>
  {data ? data.films.map((film: any) => (
    <FilmCard
      id={`${film.id}`}
      title={`${film.title}`}
      releaseYear={`${film.releaseYear}`}
    />
  )): 'Loading mapped data'}
</div>
<div>
  {data ? <pre>{JSON.stringify(data, null, 1)}</pre> : 'Loading...'}
</div>

</> */}



// function setActorName(data: any) {
//   let name = data[0];
//   return name;
// }

// function cleanData(inputString: string) {
//   const removeChar: string = "";
//   const cleanRegex = new RegExp(removeChar, 'g');
//   let cleanString = inputString.replace(cleanRegex, '');
//   return cleanString;
// }


      {/* <div>
        {this.data.films.map((film: any) => (
          <FilmCard
            id={film.id}
            title={film.title}
          />
        ))}
      </div> */}
      // <div>
      //   {data.films.forEach((film: any) => {
      //     {film.title}
      //   })}
      // </div>