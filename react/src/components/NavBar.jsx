import styles from './NavBar.module.css'
function Navbar() {
  return (
    <>
    <nav className={styles.navBar}>
    <div className={styles.logo}>
      KaushaniR
    </div>

    <div className={styles.navLinks}>
      <a href='#about'>About</a>
      <a href='#projects'>Projects</a>
      <a href='#articles'>Articles</a>
      <a href='#contact'>Contact</a>
      
    </div>

    {/*<div className='darkModeButton'>
      <button onClick={}></button>
      
    </div>*/}

    </nav>
    </>
   
  )
}

export default Navbar