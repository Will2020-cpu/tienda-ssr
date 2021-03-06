import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SectionBusqueda from './SectionBusqueda'
import { motion } from 'framer-motion'


const NavBar = () => {
    const [focus,setFocus] = useState(false)
    const easing = [0.6, -0.05, 0.01, 0.99]


    const fadeInUp ={
    initial:{
        y:60,
        opacity:0,

        },
        animate:{
        y:0,
        opacity:1,
            transition:{
                duration:0.6,
                ease: easing
            }
        }
    }

    return (
        <>
            <div className="bg-white py-1 shadow-lg">
                <div className="flex  w-11/12 m-auto items-center justify-between">
                    <div className="flex items-center space-x-8 nav">
                        <Link href="/"><a className={styles.logo}><img src="/logotipomodificado.png" alt="logo" width="40" /> TiendaWolf </a></Link>
                        <div className={styles.search}>
                            <div className={styles.searchIcon}>
                                <FontAwesomeIcon icon={faSearch} className="text-gray-400 hover:text-gray-500" />
                            </div>
                            <form action="">
                                <input  onFocus={()=> setFocus(true)} onBlur={() => setFocus(false)} type="text" placeholder="Busca el accesorio" className={styles.inputInput} />
                                <input type="submit" hidden/>
                            </form>
                        </div>
                    </div>
                    <nav className="flex space-x-4 items-center nav">
                        <Link href="/camisas">
                            <a className={styles.Links}>
                                <div className="">
                                    <span className="text-gray-500 hover:text-gray-900">Camisas</span>
                                    <span className={styles.span}>Nuevo</span>
                                </div>
                            </a>
                        </Link>

                        <Link href="/">
                            <a className="text-gray-500 hover:text-gray-900">Pantalones</a>
                        </Link>
                        <Link href="/">
                            <a className="text-gray-500 hover:text-gray-900">Zapatos</a>
                        </Link>
                        <Link href="/">
                            <a className="text-gray-500 hover:text-gray-900">Relojes</a>
                        </Link>
                    </nav>

                    <nav className="flex items-center space-x-2 nav">
                        <Link href="/">
                            <a className="text-gray-500 hover:text-gray-900">Entrar</a>
                        </Link>
                        <Link href="/">
                            <a className="py-1 px-2 bg-green-500 rounded text-white">Unirse</a>
                        </Link>
                    </nav>
                </div>
            </div>
            {focus ? (
                <motion.div exit={{opacity:0}} className={styles.busqueda}>
                    <SectionBusqueda/>
                </motion.div>
            ) : (null)}  
        </>
    )
}

export default NavBar
