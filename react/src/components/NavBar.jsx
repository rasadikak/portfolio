import styles from './NavBar.module.css'
function Navbar({toggleTheme, isDark}) {
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

      <button className={styles.togglebtn} onClick={toggleTheme}>
        {isDark ? <i className='fa-solid fa-sun'></i> : <i className='fa-solid fa-moon'></i>}
      </button>
      
    </div>

    
      
      
    

    </nav>
    </>
   
  )
}

export default Navbar