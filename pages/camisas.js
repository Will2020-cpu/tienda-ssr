import Head from 'next/head'
import React from 'react'
import NavBar from '../components/NavBar'
import { motion } from 'framer-motion'


const Camisas = () => {
    return (
        <motion.div exit={{ opacity:0 }}>
            <Head>
                <title>Wolf Camisas</title>
                <link rel="icon" href="/logotipomodificado.ico" />
            </Head>
            <NavBar />
        </motion.div>
    )
}

export default Camisas