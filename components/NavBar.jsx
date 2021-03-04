import React from 'react'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
    return (
        <>
            <div className="bg-white py-2 shadow-lg">
                <div className="flex justify-around w-11/12 m-auto items-center">
                    <Link href="/"><a><img src="/logotipomodificado.png" alt="logo" width="40" /></a></Link>
                    <div className={styles.search}>
                        <div className={styles.searchIcon}>
                            <FontAwesomeIcon icon={faSearch} className="text-gray-400 hover:text-gray-500" />
                        </div>
                        <input type="text" placeholder="Busca el accesario" className={styles.inputInput}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar
