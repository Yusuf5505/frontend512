import Movie from "./Movie";
import './MoveList.css';

function MoveList(props){
    const { movies = [] } = props;

    return(
        <div className="movies">
            {
                movies.map(movie => (
                    <Movie key={movie.imdbID} {...movie}/>
                ))
            }
        </div>
    );
}
export default MoveList;