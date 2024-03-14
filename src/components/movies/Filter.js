import './movies.css';
import SearchBar from '../general/SearchBar';
import Input from '../general/Input';
import SelectInput from '../general/SelectInput';
import Tag from './Tag';

const Filter = ({ minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle }) => {
    const sortByOptions = [
        { value: 'latest', label: 'Latest' },
        { value: 'oldest', label: 'Oldest' },
        { value: 'highestrated', label: 'Highest Rated' },
        { value: 'lowestrated', label: 'Lowest Rated' },
    ];
    const genresList = [
        'action', 'drama', 'comedy', 'biography', 'romance', 'thriller', 'war', 'history', 'sport', 'sci-fi', 'documentary', 'crime', 'fantasy'
    ];
    return (
        <div className='filter-parent-div'>
            <div className='filter-left-div'>
                <div className='filter-seach-div'>
                    <SearchBar title={title} setTitle={setTitle} />
                </div>
                <div className='filter-inputs-div'>
                    <Input label="Min Date" type="number" className="input-dark" value={minYear} setValue={setMinYear} />
                    <Input label="Max Date" type="number" className="input-dark" value={maxYear} setValue={setMaxYear} />
                    <SelectInput label="Sort" options={sortByOptions} className="select-dark" value={sort} setValue={setSort} />
                </div>
            </div>
            <div className='filter-right-div'>
                <ul>
                    {genresList.map((genre) => (
                        <Tag key={genre} filter={true} genres={genres} setGenres={setGenres} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Filter;
