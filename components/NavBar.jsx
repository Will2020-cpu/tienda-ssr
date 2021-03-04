import React from 'react'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
    return (
        <>
            <div className="bg-white py-1 shadow-lg">
                <div className="flex  w-11/12 m-auto items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <Link href="/"><a className={styles.logo}><img src="/logotipomodificado.png" alt="logo" width="40" /> TiendaWolf </a></Link>
                        <div className={styles.search}>
                            <div className={styles.searchIcon}>
                                <FontAwesomeIcon icon={faSearch} className="text-gray-400 hover:text-gray-500" />
                            </div>
                            <input type="text" placeholder="Busca el accesorio" className={styles.inputInput} />
                        </div>
                    </div>
                        <nav className="flex space-x-4 items-center">
                            <Link href="/">
                                <a className={styles.Links}>
                                    <div className="">
                                        <span className="text-gray-500 hover:text-gray-900">Camisas</span>
                                        <span className={styles.span}>Nuevo</span>
                                    </div>
                                </a>
                            </Link>

                            <Link href="">
                                <a className="text-gray-500 hover:text-gray-900">Pantalones</a>
                            </Link>
                            <Link href="">
                                <a className="text-gray-500 hover:text-gray-900">Zapatos</a>
                            </Link>
                            <Link href="">
                                <a className="text-gray-500 hover:text-gray-900">Relojes</a>
                            </Link>
                        </nav>

                        <nav className="flex items-center space-x-2">
                            <Link href="">
                                <a className="text-gray-500 hover:text-gray-900">Entrar</a>
                            </Link>
                            <Link href="">
                                <a className="p-1 bg-green-500 rounded text-white">Unirse</a>
                            </Link>
                        </nav>
                </div>
            </div>
        </>
    )
}

export default NavBar
