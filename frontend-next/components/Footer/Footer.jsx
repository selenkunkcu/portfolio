import { useState } from 'react'

import { AppWrap, MotionWrap } from '@/wrapper'
import { client } from '@/lib/sanityClient'

import styles from "./footer.module.scss"
import globalStyles from "../../pages/index.module.scss"

const Footer = () => {

  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact).then(() => {
       setLoading(false);
       setIsFormSubmitted(true);
    })
  }

  return (
    <>
      <h2 className={globalStyles.head_text}>Chat with me..</h2>

      <div className={styles.app__footer_cards}>
        <div className={styles.app__footer_card}>
          <img src="/assets/email.png" alt="email" />
          <a href="mailto:selenkunkcu@gmail.com" className={globalStyles.p_text}>selenkunkcu@gmail.com</a>
        </div>
        <div className={styles.app__footer_card}>
          <img src="/assets/mobile.png" alt="mobile" />
          <a href="tel:+905061269318" className={globalStyles.p_text}>+90 (506) 126 93 18</a>
        </div>
      </div>

      {!isFormSubmitted ?
            <div className={`${styles.app__footer_form} ${globalStyles.app__flex}`}>
              <div className={globalStyles.app__flex}>
                <input className={globalStyles.p_text} type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
              </div>
              <div className={globalStyles.app__flex}>
                <input className={globalStyles.p_text} type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
              </div>
              <div>
                <textarea className={globalStyles.p_text} placeholder="Your Message" value={message} name="message" onChange={handleChangeInput}></textarea>
              </div>
              <button type="button" className={globalStyles.p_text} onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
            </div>
            :
            <div>
              <h3 className={globalStyles.p_text}>Thank you for getting in touch!</h3>
            </div>
    }    
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, `${styles.app__footer}`),
  'contact',
  `${globalStyles.app__primarybg}`
)

