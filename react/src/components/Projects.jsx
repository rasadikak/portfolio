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
            Technologies: FastAPI, HTML, Tailwind CSS, PostgreSQL
          </div>
          <div className={styles.buttons}>
            <a href='https://github.com/rasadikak/AI_trip_planning_webapp.git' target='_blank' className={styles.github_btn}>View on Github</a>
            <a href='https://serendib-ai-902076322619.asia-south1.run.app/frontend/home/home.html' target='_blank' className={styles.demo_btn}>Demo</a>
          </div>
        </div>


        <div className={styles.card}>
          <h4 className={styles.title}>AI-Crop-Disease-Yield-Platform</h4>
          <p className={styles.description}>
            AgriSense is an AI-powered agricultural platform that gives 
            Sri Lankan farmers real-time crop yield predictions, plant disease
             detection, and weather anomaly alerts. Built with React, Express.js,
              and FastAPI, it combines machine learning models with an AI chatbot
               to support smarter, data-driven farming decisions.
          </p>
          <div className={styles.technology}>
            Technologies: React, Tailwind CSS Express.js, FastAPI, PostgreSQL
          </div>
          <div className={styles.buttons}>
          <a href='https://github.com/rasadikak/AI-Crop-Disease-Yield-Platform.git' target='_blank' className={styles.github_btn}>View on Github</a>
          <a href='https://ai-crop-disease-yield-platform.vercel.app/' target='_blank' className={styles.demo_btn}>Frontend</a>
          </div>
        </div>


        <div className={styles.card}>
          <h4 className={styles.title}>Smart Credit API</h4>
          <p className={styles.description}>
            Smart Credit+ is a peer-to-peer digital lending platform that
             connects borrowers, lenders, and administrators through a 
             transparent and structured digital lending workflow. Built 
             with React, Vite, NestJS, Firestore, and cloud-based services, it
              supports borrower and lender mobile applications, KYC verification, 
              loan advertisements, digital agreements, QR-based repayment recording,
               chat communication, portfolio analytics, and administrative 
               monitoring to make the lending process more secure, organized, 
               and accessible.
          </p>
          <div className={styles.technology}>
            Technologies: React, React native, nest.js
          </div>
          <div className={styles.buttons}>
            <a href='https://github.com/NishenAMJ/Smart_Credit_API.git' target='_blank' className={styles.github_btn}>View on Github</a>
            <a href='' target='_blank' className={styles.demo_btn}>Demo</a>
          </div>
        </div>


              <div className={styles.card}>
          <h4 className={styles.title}>Epilogue Quiz Game Web App | MoraSpirit</h4>
          <p className={styles.description}>
           Epilogue Quiz Game Web App is a full-stack, gamified quiz platform
            designed for the MoraSpirit community, featuring sequential level-locking 
            and real-time score tracking to power a live, puzzle-based competition. 
            It has been used by around 300 real-time registered users, providing a secure
             and interactive web experience built with Next.js, Prisma, and MySQL.
          </p>
          <div className={styles.technology}>
            Technologies:  Next.js, Prisma, MySQL
          </div>
          <div className={styles.buttons}>
            <a href='https://github.com/moraspirit/epilogue-quiz-game-web-app.git' target='_blank' className={styles.github_btn}>View on Github</a>
            <a href='https://quiz.moraspirit.com/' target='_blank' className={styles.demo_btn}>Demo</a>
            
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
            <a href='https://github.com/rasadikak/Laptop_Price_Predictor_new.git' target='_blank' className={styles.github_btn}>View on Github</a>
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
            <a href='https://github.com/rasadikak/Face-Mask-Detection.git' target='_blank' className={styles.github_btn}>View on Github</a>
            <a href='' target='_blank' className={styles.demo_btn}>Demo</a>
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
            <a href='https://github.com/rasadikak/Text_to_Image_generator_new.git' target='_blank' className={styles.github_btn}>View on Github</a>
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