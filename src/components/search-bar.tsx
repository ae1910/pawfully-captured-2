import {useState} from 'react';
import "../App.css";
import {StyledSearchBar} from './styles/search-bar.styles';
import search from "../img/search.png";

type searchProps = {
    onSearch: (query: string) => void
}

const SearchBar = ({ onSearch }: searchProps) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <>
            <StyledSearchBar className="search-form" onSubmit={handleSubmit}>
                <input className="search-input" 
                type="text"  
                value={query} 
                placeholder="Search..." 
                onChange={(e) => setQuery(e.target.value)}/>
                <button className="search-button" type="submit" value="Search">
                    <img src={search} alt="Search Icon"/>
                </button>
            </StyledSearchBar>
        </>
    );
}
export default SearchBar;