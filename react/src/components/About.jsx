import styles from './About.module.css'
function About() {

  const frontendSkills = [
  { name: 'React', icon: 'devicon-react-original colored' },
  { name: 'HTML', icon: 'devicon-html5-plain colored' },
  { name: 'CSS', icon: 'devicon-css3-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' },
]

const backendSkills = [
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'Nest.js', icon: 'devicon-nestjs-plain colored' },
  
  { name: 'Java', icon: 'devicon-java-plain colored' },
  { name: 'C', icon: 'devicon-c-plain colored' }
]

const databaseSkills = [
  { name: 'Postgresql', icon: 'devicon-postgresql-plain colored' },
  { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
]

const tools = [
  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'GitHub', icon: 'devicon-github-original colored' },
  { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
  { name: 'Postman', icon: 'devicon-postman-plain colored' },
]
  
  return (
    <>
    <div id='about' className={styles.main}>
    <h2 className={styles.about}>About me</h2>

    <p className={styles.description}>
      I am an enthusiastic IT undergraduate, currently pursuing a BSc (Hons) in IT degree at 
      Univerisity of Moratuwa,Sri Lanka with a passion for Software Engineering, Artificial Intelligence,
       and web development.I focus on building efficient and user-friendly solutions 
       while continuously learning new technologies and improving my technical abilities. 
       With strong problem-solving skills and a positive mindset, I am committed to growing as
        a developer and contributing to innovative and impactful solutions.
    </p>

    <h2 className={styles.about}>Tech Stack</h2>
    <div className={styles.mainContainer}>

      

        <div className={styles.card}>
            <h3 className={styles.title}>Frontend</h3>
            {frontendSkills.map((skill)=>(
              
              <div key={skill.name} className={styles.skill}>
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
                
                </div>
      
            ))}
        </div>

        <div className={styles.card}>
            <h3 className={styles.title}>Backend</h3>
            {backendSkills.map((skill)=>(
              
              <div key={skill.name} className={styles.skill}>
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
                
                </div>
      
            ))}
        </div>


        <div className={styles.card}>
            <h3 className={styles.title}>Database</h3>
            {databaseSkills.map((skill)=>(
              
              <div key={skill.name} className={styles.skill}>
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
                
                </div>
              
      
            ))}
        </div>

        <div className={styles.card}>
            <h3 className={styles.title}>Other</h3>
            {tools.map((skill)=>(
              
             <div key={skill.name} className={styles.skill}>
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
                
                </div>
      
            ))}
        </div>

    
    </div>
    </div>


    </>
    
  )
}

export default About