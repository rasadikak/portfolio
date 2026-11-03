import styles from './About.module.css'
function About() {

  const frontendSkills = [
  { name: 'React', icon: 'devicon-react-original colored' },
  { name: 'Next.js', icon: 'devicon-nextjs-plain' },
  { name: 'HTML', icon: 'devicon-html5-plain colored' },
  { name: 'CSS', icon: 'devicon-css3-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'Tailwind', icon: 'devicon-tailwindcss-plain colored' },
]

const backendSkills = [
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'Nest.js', icon: 'devicon-nestjs-plain colored' },
   { name: 'Express.js', icon: 'devicon-express-original colored' },
  { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
  { name: 'Flask', icon: 'devicon-flask-original colored' },
  { name: 'Java', icon: 'devicon-java-plain colored' },
  { name: 'Spring Boot', icon: 'devicon-spring-original colored' },
  { name: '.ASP.NET', icon: 'devicon-dotnetcore-plain colored' },
  { name: 'C', icon: 'devicon-c-plain colored' }
]

const databaseSkills = [
  { name: 'Postgresql', icon: 'devicon-postgresql-plain colored' },
  { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
  { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
  { name: 'MSSQL', icon: 'devicon-microsoftsqlserver-plain colored' },
  { name: 'SQLite', icon: 'devicon-sqlite-plain colored' },
  { name: 'Prisma ORM', icon: 'devicon-prisma-original' },
  { name: 'SQLAlchemy ORM', icon: 'devicon-sqlalchemy-original colored' },
]

const mlSkills = [
  { name: 'PyTorch', icon: 'devicon-pytorch-original colored' },
  { name: 'TensorFlow/Keras', icon: 'devicon-tensorflow-original colored' },
  { name: 'Scikit-learn', icon: 'devicon-scikitlearn-plain colored' },
  { name: 'OpenCV', icon: 'devicon-opencv-plain colored' },
  { name: 'Pandas', icon: 'devicon-pandas-original colored' },
  { name: 'NumPy', icon: 'devicon-numpy-original colored' },
]



const cloudSkills = [
  { name: 'AWS (EC2)', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
  { name: 'Google Cloud Run', icon: 'devicon-googlecloud-plain colored' },
  { name: 'Linux (Ubuntu)', icon: 'devicon-ubuntu-plain colored' },
  { name: 'GitHub Actions', icon: 'devicon-githubactions-plain colored' },
]

const tools = [
  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'GitHub', icon: 'devicon-github-original colored' },
  { name: 'Docker', icon: 'devicon-docker-plain colored' },
  { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
  { name: 'Postman', icon: 'devicon-postman-plain colored' },
  { name: 'Google Colab', icon: 'devicon-googlecolab-original colored' },
  { name: 'Jupyter Notebook', icon: 'devicon-jupyter-plain colored' },
  { name: 'Figma', icon: 'devicon-figma-plain colored' },
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
            <h3 className={styles.title}>Machine Learning & Data</h3>
            {mlSkills.map((skill)=>(
              
              <div key={skill.name} className={styles.skill}>
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
                
                </div>
      
            ))}
        </div>

        

        <div className={styles.card}>
            <h3 className={styles.title}>Cloud</h3>
            {cloudSkills.map((skill)=>(
              
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