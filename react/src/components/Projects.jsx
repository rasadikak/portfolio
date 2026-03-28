import styles from './Projects.module.css'

function Projects() {
  return (
    <>
    <div id='projects' className={styles.main}>
      <h2 className={styles.h2}>Featured Projects</h2>
      <div className={styles.mainContainer}>



        <div className={styles.card}>
          <h4 className={styles.title}>AI Trip Planner Web App</h4>
          <p className={styles.description}>
            AI Trip Planner is an intelligent web application that generates 
            personalized travel plans based on user preferences such as destination,
             budget, accomodation and duration etc. It integrates AI models and external
              APIs to provide smart recommendations and real-time travel insights.
          </p>
          <div className={styles.technology}>
            Technologies: python
          </div>
          <div className={styles.buttons}>
            <button className={styles.github_btn} onClick={()=>window.location.href='#'}>View on Github</button>
            <button className={styles.demo_btn} onClick={()=>window.location.href='#'}>Demo</button>
          </div>
        </div>


        <div className={styles.card}>
          <h4 className={styles.title}>Laptop Price predictor</h4>
          <p className={styles.description}>
            My first project
          </p>
          <div className={styles.technology}>
            Technologies: python
          </div>
          <div className={styles.buttons}>
            <button className={styles.github_btn} onClick={()=>window.location.href='#'}>View on Github</button>
            <button className={styles.demo_btn} onClick={()=>window.location.href='#'}>Demo</button>
          </div>
        </div>


        <div className={styles.card}>
          <h4 className={styles.title}>Laptop Price predictor</h4>
          <p className={styles.description}>
            My first project
          </p>
          <div className={styles.technology}>
            Technologies: python
          </div>
          <div className={styles.buttons}>
            <button className={styles.github_btn} onClick={()=>window.location.href='#'}>View on Github</button>
            <button className={styles.demo_btn} onClick={()=>window.location.href='#'}>Demo</button>
          </div>
        </div>

        

        <div className={styles.card}>
          <h4 className={styles.title}>Laptop Price predictor</h4>
          <p className={styles.description}>
            My first project
          </p>
          <div className={styles.technology}>
            Technologies: python
          </div>
          <div className={styles.buttons}>
            <button className={styles.github_btn} onClick={()=>window.location.href='#'}>View on Github</button>
            <button className={styles.demo_btn} onClick={()=>window.location.href='#'}>Demo</button>
          </div>
        </div>

        <div className={styles.card}>
          <h4 className={styles.title}>Laptop Price predictor</h4>
          <p className={styles.description}>
           Laptop Price Predictor is a machine learning-based web application 
           designed to estimate laptop prices based on user-selected specifications
            such as brand, RAM, processor, and storage etc. It provides accurate 
            predictions through a trained model and an interactive user interface.
          </p>
          <div className={styles.technology}>
            Technologies:  Flask, Pandas, NumPy, Scikit-learn, Jupyter Notebook, HTML,CSS
          </div>
          <div className={styles.buttons}>
            <a href='https://github.com/rasadikak/Laptop_Price_Predictor_new' target='_blank' className={styles.github_btn}>View on Github</a>
            <a href='https://rasadikak.pythonanywhere.com/' target='_blank' className={styles.demo_btn}>Demo</a>
            
          </div>
        </div>


        <div className={styles.card}>
          <h4 className={styles.title}>Face Mask Detection Web App</h4>
          <p className={styles.description}>
           Face Mask Detection Web App is a computer vision-based application
            designed to detect whether a person is wearing a face mask or
             not using image classification techniques. It provides real-time
              predictions through an interactive web interface.
          </p>
          <div className={styles.technology}>
            Technologies: Python, TensorFlow / Keras, OpenCV, HTML, CSS
          </div>
          <div className={styles.buttons}>
            <button className={styles.github_btn} onClick={()=>window.location.href='#'}>View on Github</button>
            <button className={styles.demo_btn} onClick={()=>window.location.href='#'}>Demo</button>
          </div>
        </div>



        <div className={styles.card}>
          <h4 className={styles.title}>Image Generator App</h4>
          <p className={styles.description}>
            Image Generator Web app is an AI-powered web application that generates 
            images from user-provided text prompts. It allows users to create 
            unique visuals using artificial intelligence models through an
             easy-to-use interface.
          </p>
          <div className={styles.technology}>
            Technologies: Flask, Hugging Face Inference API, HTML,CSS
          </div>
          <div className={styles.buttons}>
            <a href='https://github.com/rasadikak/Text_to_Image_generator_new' target='_blank' className={styles.github_btn}>View on Github</a>
            <a href='https://kaushani.pythonanywhere.com/' target='_blank' className={styles.demo_btn}>Demo</a>
          </div>
        </div>



        <div className={styles.card}>
          <h4 className={styles.title}>Simple Calculator</h4>
          <p className={styles.description}>
           Simple Calculator is a web-based application developed to perform basic
            arithmetic operations such as addition, subtraction, multiplication, 
            and division. It features a clean interface designed for quick and 
            efficient calculations.
          </p>
          <div className={styles.technology}>
            Technologies: HTML, CSS, JavaScript
          </div>
          <div className={styles.buttons}>
            <a href='https://github.com/rasadikak/simple-calculator' target='_blank' className={styles.github_btn}>View on Github</a>
            <a href='https://simple-calculator-jl7k8k1dw-rasadikaks-projects.vercel.app' target='_blank' className={styles.demo_btn}>Demo</a>
          </div>
        </div>







      </div>
    </div>
    </>
    
  )
}

export default Projects