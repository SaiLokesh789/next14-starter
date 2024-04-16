"use client";
import style from './loginForm.module.css'
import { login } from '@/lib/actions';
import Link from 'next/link';
import { useFormState } from "react-dom";

const LoginForm = () => {

  const [state, formAction] = useFormState(login, undefined);

  return (
    <form action={formAction} className={style.credForm} >
      <input type="text" placeholder='Username' name='username' />
      <input type="password" placeholder='Password' name='password' />
      <button>Login with credentials</button>
      {state?.error && <p> {state.error} </p>}
      <Link href='/register' >{"Didn't have an account?"}  <b>Register</b> </Link>
    </form>
  )
}

export default LoginForm;