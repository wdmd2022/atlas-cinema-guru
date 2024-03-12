import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = ({ title, setTitle }) => {
    const handleInput = (event) => {
        setTitle(event.target.value);
    };
    return (
        <div className='search-container'>
            <FontAwesomeIcon icon="search" />
            <input type="text" value={title} onChange={handleInput} />
        </div>
    );
}

export default SearchBar;
