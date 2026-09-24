import React from "react";
import MoveList from "../components/MoveList";
import './Main.css';
import Preloader from "../components/Preloader";
import Search from "../components/Search";

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
        count: 0
    }

    componentDidMount() {
        fetch("https://www.omdbapi.com/?apikey=fe7a5bf6&s=matrix")
            .then(response => response.json())
            .then(data => this.setState({
                movies: data.Search || [],
                loading: false,
                count: Number(data.totalResults) || 0    // ← сюда, не в catch
            }))
            .catch(() => this.setState({ movies: [], loading: false }));
    }

    searchMove = (str, type = 'all', page = 1) => {
        this.setState({ loading: true });

        const url = `https://www.omdbapi.com/?apikey=fe7a5bf6&s=${str}${type !== "all" ? `&type=${type}` : ``}&page=${page}`;

        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({
                movies: data.Search || [],
                loading: false,
                count: Number(data.totalResults) || 0
            }))
            .catch(() => this.setState({ movies: [], loading: false }));
    }

    render() {
        const { movies, loading, count } = this.state;

        return (
            <div className="main">
                <div className="wrap">
                    <Search searchMove={this.searchMove} totalCount={count} />
                    {
                        loading
                            ? <Preloader />
                            : movies.length
                                ? <MoveList movies={movies} />
                                : <p>Nothing found</p>
                    }
                </div>
            </div>
        )
    }
}

export default Main;