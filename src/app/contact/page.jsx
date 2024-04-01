import style from './ContactPage.module.css'
import Image from 'next/image'

const ContactPage = () => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Image src="/contact.png" alt='contact image' fill className={style.img} />
      </div>
      <div className={style.formContainer}>
        <form className={style.form}>
          <input type="text" placeholder='Name and Surname' />
          <input type="email" placeholder='Email Address' />
          <input type="number" placeholder='Phone Number' />
          <textarea name="" id="" cols="30" rows="10" placeholder='Message' />
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage