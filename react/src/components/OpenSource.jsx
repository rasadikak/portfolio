import styles from './OpenSource.module.css'

function OpenSource() {
  return (
    <>
    <div id='opensource' className={styles.main}>
      <h2 className={styles.h2}>Open Source Contribution</h2>
      <div className={styles.mainContainer}>



        <div className={styles.card}>
          <span className={styles.badge}>Merged · November 2026</span>
          <h4 className={styles.title}>KanaDojo | Open Source Contribution</h4>
          <p className={styles.description}>
            KanaDojo is an open source platform for learning Japanese, inspired
            by Duolingo and Monkeytype. I contributed a new entry to its community
            content data. The pull request was linked to its issue, passed the
            project's automated review, and was merged into the main repository.
          </p>
          <ul className={styles.list}>
            <li>Forked the repository and worked on a separate branch</li>
            <li>Followed the project's contributing guide and issue linking rules</li>
            <li>Passed the automated review checks and got the pull request merged</li>
           
          </ul>
          <div className={styles.technology}>
            Technologies: Git, GitHub, Next.js, TypeScript, JSON
          </div>
          <div className={styles.buttons}>
            <a href='https://github.com/lingdojo/kana-dojo/pull/33476' target='_blank' rel='noopener noreferrer' className={styles.github_btn}>View Pull Request</a>
            <a href='https://github.com/lingdojo/kana-dojo' target='_blank' rel='noopener noreferrer' className={styles.demo_btn}>Repository</a>
          </div>
        </div>



      </div>
    </div>
    </>

  )
}

export default OpenSource