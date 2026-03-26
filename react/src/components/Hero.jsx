import {styles} from './Hero.module.css'
function Hero() {
  return (
    <>
      <div className={styles.hero}>

        <div className={styles.myName}>
        <h2>Kaushani Rasadika</h2>
        </div>

        <div className={styles.job}>
        <h3>IT Undergraduate</h3>
        </div>

        <div className={styles.description}>
        <h4>A passionate software engineer building modern web applications
           with React, Angular, Java and Spring Boot. Explore my projects, 
           articles, and professional journey.</h4>
        </div>
      
    </div>
    </>
  );
}

export default Hero