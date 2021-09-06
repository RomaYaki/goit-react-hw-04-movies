import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import styles from './Search.module.css'

function Search({ onSubmit }) {
    const [search, setSearch] = useState('');

    const ChangeName = (e) => {
        setSearch(e.currentTaget.value.toLoverCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.trim() === "") {
            toast.error("Введите название фильма.");
            return;
        }
        onSubmit(search);
        setSearch("");
    };

    return (
        <header className={styles.Searchbar}>
      <form
        action="submit"
        onSubmit={handleSubmit}
        className={styles.SearchForm}
      >
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          placeholder="Search movies"
          name="search"
          value={search}
          onChange={ChangeName}
        />
      </form>
    </header>
    );
};

    Search.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    };

export default Search;


