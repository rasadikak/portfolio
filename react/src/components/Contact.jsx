import styles from './Contact.module.css'
import {useState} from 'react'

function Contact(){

    const [name, setName] =useState('')
    const [email, setEmail] =useState('')
    const [subject, setSubject] =useState('')
    const [message, setMessage] =useState('')
    return(
        <>
        <div id='contact' className={styles.main}>
            <h2 className={styles.h2}>Let's Work Together</h2>
            <p className={styles.p}>
                I'm always interested in new opportunities and interesting projects. Let's connect and discuss how we can work together.
            </p>
            <div className={styles.form}>
                <form>
                    <label htmlFor='name' className={styles.label}>Name</label>
                    <input type='text' name='name' placeholder='Your full name'
                        value={name} onChange={(e)=>setName(e.target.value)} 
                        className={styles.input} required></input>

                    <label htmlFor='email' className={styles.label}>Email</label>
                    <input type='email' name='email' placeholder='your.email@example.com'
                        value={email} onChange={(e)=>setEmail(e.target.value)}
                        className={styles.input} required></input>

                    <label htmlFor='subject' className={styles.label}>Subject</label>
                    <input type='text' name='subject' placeholder='What would you like to discuss?'
                        value={subject} onChange={(e)=>setSubject(e.target.value)}
                        className={styles.input} required></input>

                    <label htmlFor='msg' className={styles.label}>Message</label>
                    <textarea name='msg' placeholder='Tell me about your project, idea or just say hello...'
                        value={message} onChange={(e)=> setMessage(e.target.value)}
                         className={styles.input}></textarea>
                    
                    <input type='submit' value='Send Message' className={styles.btn}></input>
                </form>
            </div>

        </div>
        </>
    )

}

export default Contact