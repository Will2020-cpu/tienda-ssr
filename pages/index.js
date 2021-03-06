import Head from 'next/head'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import Search from '../components/Search'
import { motion } from 'framer-motion'
import Card from '../components/Card'



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

const stagger ={
  animate:{
    transition:{
      staggerChildren:0.2
    }
  }
}



export default function Home() {
  return (
    <>
      <Head>
        <title>Wolf Moda</title>
        <link rel="icon" href="/logotipomodificado.ico" />
      </Head>
      <NavBar />
      <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
      >
        <div className={styles.hero} style={{ backgroundImage: `url(/hero.jpg)` }}>
          <motion.div variants={fadeInUp}>
            <Search />
          </motion.div>
        </div>
        
        <motion.div variants={fadeInUp}>
          <Card/>
        </motion.div>

      </motion.div>
    </>
  )
}
