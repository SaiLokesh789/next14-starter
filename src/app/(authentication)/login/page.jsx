"use client"
import style from './login.module.css'
import Image from 'next/image';
import LoginForm from '@/components/loginForm/loginForm';
import { handleGithubLogin } from '@/lib/actions';

const LoginPage = async () => {

  return (
    <div className={style.container}>

      <div className={style.imageContainer}>
        <Image src='/tom.png' alt='photo' fill />
      </div>

      <div className={style.fomContainer}>
        <div className={style.logins}>
          <form action=''>
            <button className={style.login}>
              <Image src='/google.webp' width={30} height={30} />
              Login with Google
            </button>
          </form>
          <form action={handleGithubLogin}>
            <button className={style.login}>
              <Image src='/github.png' width={30} height={30} />
              Login with Github
            </button>
          </form>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage