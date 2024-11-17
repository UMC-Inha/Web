import { useState } from 'react';
import { set } from 'react-hook-form';

export default function useSearchHook() {
    const [search, setSearch] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = () => {
        if (!search.trim()) {
            return;
        }
    };

    return { search, handleSearchChange, handleSearch };
}