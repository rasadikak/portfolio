import styles from './Footer.module.css'

function Footer(){
    return(
        <>
        <div  className={styles.main}>
            <div className={styles.card}>
                <h3 className={styles.h3}>Connect with me</h3>
                <div className={styles.links}>
                    <a href='https://github.com/rasadikak' className={styles.link} target='_blank'>
                        <i className='fa-brands fa-github'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/kaushanirasadika' className={styles.link} target='_blank'>
                         <i className='fa-brands fa-linkedin'></i>
                    </a>
                    <a href='mailto:rasadikak@gmail.com' className={styles.link}target='_blank'>
                        <i className='fa-regular fa-envelope'></i>
                    </a>
                    <a href='https://www.instagram.com/rasadika.k?igsh=MTUxN2xhazE1b242ag==' className={styles.link} target='_blank'>
                         <i className='fa-brands fa-instagram'></i>
                    </a>
                </div>

            </div>
            <p className={styles.p}>© 2026 Kaushani Rasadika. All rights reserved.</p>
        </div>
        </>
    )
}


export default Footer