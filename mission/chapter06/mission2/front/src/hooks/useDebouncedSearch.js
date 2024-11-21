import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash/debounce';

const useDebouncedSearch = (searchTerm, delay = 500) => {
    const navigate = useNavigate();

    useEffect(() => {
        const debouncedSearch = debounce((term) => {
            if (term.trim()) {
                navigate(`/search?query=${encodeURIComponent(term)}`);
            }
        }, delay);

        debouncedSearch(searchTerm);

        return () => {
            debouncedSearch.cancel();
        };
    }, [searchTerm, navigate, delay]);
};

export default useDebouncedSearch;
