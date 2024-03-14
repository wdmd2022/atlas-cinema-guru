import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard.js';
import Filter from '../../components/movies/Filter.js'
import Button from '../../components/general/Button.js';
import { useState, useEffect } from 'react';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [minYear, setMinYear] = useState(1970);
    const [maxYear, setMaxYear] = useState(2022);
    const [genres, setGenres] = useState([]);
    const [sort, setSort] = useState("");
    const [title, setTitle] = useState("");
    const [page, setPage] = useState(1);

    return (
        <div>
            <Filter minYear={minYear} setMinYear={setMinYear} maxYear={maxYear} setMaxYear={setMaxYear} sort={sort} setSort={setSort} genres={genres} setGenres={setGenres} title={title} setTitle={setTitle} />
        </div>
    )
}

export default HomePage;
