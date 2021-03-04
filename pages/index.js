import Head from 'next/head'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import Search from '../components/Search'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className={styles.hero} style={{backgroundImage:`url(/hero.jpg)`}}>
          <Search/>
      </div>
      
    </div>
  )
}
