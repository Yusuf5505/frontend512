import "./Search.css";
import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        type: "all",
        page: 1
    }

    handleKey = (event) => {
        if (event.key === "Enter") {
            this.props.searchMove(this.state.search, this.state.type, this.state.page);
        }
    }

    prevPage = () => {
        if (this.state.page <= 1) return;

        this.setState({ page: this.state.page - 1 }, () => {
            this.props.searchMove(this.state.search, this.state.type, this.state.page);
        });
    }
    nextPage = () => {
        this.setState({ page: this.state.page + 1 }, () => {
            this.props.searchMove(this.state.search, this.state.type, this.state.page);
        })
    }

    handleFilter = (event) => {
        this.setState({ type: event.target.dataset.type }, () => {
            this.props.searchMove(this.state.search, this.state.type, this.state.page);
        })

    }
    goToPage = (pageNumber) => {
        this.setState({ page: pageNumber }, () => {
            this.props.searchMove(this.state.search, this.state.type, this.state.page);
        });
    }

    render() {
        let limit = 10;
        let totalPage = Math.ceil(this.props.totalCount / limit)
        let num = [];
        for (let i = 1; i <= totalPage; i++) {
            num.push(i)
        }

        const { search, type, page } = this.state;

        return (
            <>
                <div className="search">
                    <input
                        type="search"
                        placeholder="search"
                        value={search}
                        onChange={(e) => this.setState({ search: e.target.value })}
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className="btn"
                        onClick={() => this.props.searchMove(search, type, page)}
                    >
                        Search
                    </button>
                </div>
                <div className="radio">
                    <label htmlFor="all">
                        <input
                            type="radio"
                            name="type"
                            id="all"
                            data-type="all"
                            checked={type === "all"}
                            onChange={this.handleFilter}
                        />All
                    </label>
                    <label htmlFor="movie">
                        <input
                            type="radio"
                            name="type"
                            id="movie"
                            data-type="movie"
                            checked={type === "movie"}
                            onChange={this.handleFilter}
                        />Movies only
                    </label>
                    <label htmlFor="series">
                        <input
                            type="radio"
                            name="type"
                            id="series"
                            data-type="series"
                            checked={type === "series"}
                            onChange={this.handleFilter}
                        />Series only
                    </label>
                    <label htmlFor="game">
                        <input
                            type="radio"
                            name="type"
                            id="game"
                            data-type="game"
                            checked={type === "game"}
                            onChange={this.handleFilter}
                        />Games only
                    </label>
                </div>
               
                <div className="navigation">
                    <button className="btn" onClick={this.prevPage} style={{ opacity: this.state.page === 1 ? ".5" : "1" }}>Prev</button>

                    <div className="items">
                        {num.map((el) => {
                            if (el > 10) return null;
                             
                         

                            return (
                                <button
                                    key={el}
                                    className="btn"
                                    onClick={() => this.goToPage(el)}
                                     style={{ background: el === page ? "#ccc" : "" }}
                                >
                                    {el}
                                </button>
                            );
                        })}
                    </div>

                    <button className="btn" onClick={this.nextPage}>Next</button>
                </div>
            </>
        );
    }
}

export default Search;