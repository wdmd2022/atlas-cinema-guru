import './movies.css';
import { useState } from 'react';

const Tag = ({ genre, filter, genres, setGenres }) => {
    const [selected, setSelected] = useState("false");
    const handleTag = () => {
        if (selected) {
            const revisedGenres = genres.filter((gen) => gen !== genre);
            setGenres(revisedGenres);
            setSelected(false);
        } else {
            const revisedGenres = [...genres, genre];
            setGenres(revisedGenres);
            setSelected(true);
        }
    };
    return (
        <li className={selected ? 'tag selected' : 'tag'} onClick={handleTag}>{genre}</li>
    )
}

export default Tag;
