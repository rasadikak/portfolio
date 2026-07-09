import styles from './Articles.module.css'

function Articles() {
  const articles = [
    {
      id: 1,
      title: 'Stop Confusing Modules, Libraries, and Frameworks (Python Guide)',
      description: 'This article explains difference among modules, libraries and frameworks.',
      date: 'March 2026',
      link: 'https://medium.com/stop-confusing-modules-libraries-and-frameworks-python-guide-4757c1ea4444'
    }
    

  ]

  return (
    <div id='articles' className={styles.main}>
      <h2 className={styles.h2}>Latest Articles</h2>
      <div className={styles.mainContainer}>
        {articles.map((article) => (
          <div key={article.id} className={styles.card}>
            <p className={styles.date}>{article.date}</p>
            <h3 className={styles.title}>{article.title}</h3>
            <p className={styles.description}>{article.description}</p>
            <a href={article.link} target='_blank' rel='noreferrer' className={styles.btn}>
              Read on Medium
            </a>
          </div>
        ))}


        


        

        
      </div>
      <div className={styles.div}>
          <a href='https://medium.com/@kaushanirasadika385'>
            Read more articles on Medium  <i className='fa-brands fa-medium'></i></a>
        </div>
    </div>
  )
}

export default Articles