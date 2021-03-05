import React from 'react'
import styles from '../styles/search.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Search = () => {
    return (
        <>
            <div className={styles.search}>
                <div className={styles.searchIcon}>
                    <FontAwesomeIcon icon={faSearch} className="text-gray-400 hover:text-gray-500" />
                </div>
                <div className="nav">
                    <input type="text" placeholder="Busca el accesorio" className={styles.inputInput} />
                </div>
            </div>
        </>
    )
}

export default Search
