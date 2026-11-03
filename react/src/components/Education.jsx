import styles from './Education.module.css';

const educationData = [
  {
    step: '01',
    year: '2019',
    title: 'G.C.E. Ordinary Level',
    institution: 'Nalanda Girls College, Minuwangoda',
    description: 'Achieved 8A and B passes.'
  },
  {
    step: '02',
    year: '2022',
    title: 'G.C.E. Advanced Level',
    institution: 'President’s College, Minuwangoda ',
    description: 'Achieved 2A and C passes'
  },
  {
    step: '03',
    year: '2024 - 2028',
    title: 'BSc (Hons) in Information Technology',
    institution: 'University of Moratuwa',
    description: 'Specializing in Software Engineering, Artificial Intelligence, and modern web application development.'
  }
];

function Education() {
  return (
    <div id='education' className={styles.main}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          {/*<span className={styles.eyebrow}>EDUCATION</span>*/}
          <h2 className={styles.title}>Learning path</h2>
        </div>

        {/* Timeline Path */}
        <div className={styles.timeline}>
          {educationData.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              {/* Glowing Dot and Connecting Line */}
              <div className={styles.markerContainer}>
                <div className={styles.dot}></div>
                <div className={styles.line}></div>
              </div>

              {/* Milestone Year */}
              <div className={styles.yearContainer}>
                <span className={styles.year}>{item.year}</span>
              </div>

              {/* Milestone Detail Card */}
              <div className={styles.card}>
                <span className={styles.badge}>{item.step}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                {item.institution && (
                  <p className={styles.institution}>{item.institution}</p>
                )}
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;