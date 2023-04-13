import { useState } from "react";
import PropTypes from 'prop-types';

import {
    Header,
    SearchForm,
    SearchFormBtn,
    SearchFormInput,
    SearchFormButtonLabel
} from './Searchbar.styled';

export function Searchbar({ onSubmit }) {
    const [nameSearch, setNameSearch] = useState('');

    const handleChange = (e) => {
        setNameSearch(e.target.value.toLowerCase());
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nameSearch.trim() === '') {
            alert(`введите имя поиска`);
            return;
        };
        onSubmit(nameSearch);
        setNameSearch('');
    }

    return (
        <div>
            <Header >
                <SearchForm
                    onSubmit={handleSubmit}

                >
                    <SearchFormBtn type="submit" >
                        <SearchFormButtonLabel >Search</SearchFormButtonLabel >
                    </SearchFormBtn>

                    <SearchFormInput
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={handleChange}
                        value={nameSearch}
                    />
                </SearchForm>
            </Header >
        </div>


    )

}


Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

