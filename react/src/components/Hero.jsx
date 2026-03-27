import styles from './Hero.module.css'

function Hero() {
  return (
    <>
      <div className={styles.hero}>

         <div className={styles.heroLeft}>
          
        <img src='/my_photo.jpeg' alt='Kaushani' className={styles.photo} />
        
        </div>

        <div className={styles.heroRight}>

        <div className={styles.myName}>
        <h2>Kaushani Rasadika</h2>
        </div>

        

        <div className={styles.job}>
        <h3>IT Undergraduate</h3>
        </div>

        

        <div className={styles.description}>
        <p>A passionate software engineer building modern web applications
           with React, Angular, Java and Spring Boot. Explore my projects, 
           articles, and professional journey.</p>
        </div>

        <div className={styles.buttons}>
          <button className={styles.button1} onClick={()=> window.location.href='#projects'}>View my work</button>

          <button className={styles.button2} onClick={()=> window.location.href='#contact'}>Get in touch</button>
        </div>

        </div>
      
    </div>
    </>
  );
}

export default Hero


