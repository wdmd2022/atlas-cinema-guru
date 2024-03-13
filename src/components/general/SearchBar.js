import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ title, setTitle }) => {
    const handleInput = (event) => {
        setTitle(event.target.value);
    };
    return (
        <div className='search-container'>
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" value={title} onChange={handleInput} placeholder='Search Movies' />
        </div>
    );
}

export default SearchBar;
