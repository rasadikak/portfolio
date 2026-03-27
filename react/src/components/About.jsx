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
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'Java', icon: 'devicon-java-plain colored' },
]

const databaseSkills = [
  { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
]

const tools = [
  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'GitHub', icon: 'devicon-github-original colored' },
  { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
  { name: 'Figma', icon: 'devicon-figma-plain colored' },
]
  
  return (
    <>
    <div id='about' className={styles.main}>
    <h2 className={styles.about}>About me</h2>

    <p className={styles.description}>
      I am a dedicated Software Engineer from Sri Lanka, currently pursuing 
      a BSc (Hons) in IT at the University of Moratuwa.
       Passionate about Artifial Intelligence and full-stack development 
       , I specialize in designing and 
       building scalable, efficient, and user-friendly applications. With a 
       strong problem-solving mindset and keen attention to detail, I excel 
       in stress management, allowing me to remain focused and productive in 
       high-pressure environments. Committed to continuous learning and 
       professional growth, I actively seek opportunities to improve
      my skills and contribute to impactful projects. 
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