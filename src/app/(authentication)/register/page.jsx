import RegisterForm from '@/components/registerForm/registerForm'
import style from './register.module.css'
import Image from 'next/image'

const Register = () => {
  return (
    <div className={style.container} >
      <div className={style.imageContainer}>
        <Image src='/tom.png' fill />
      </div>
      <RegisterForm />
    </div>
  )
}

export default Register