"use client"
import { register } from '@/lib/actions';
import style from './registerForm.module.css'
import { useFormState } from "react-dom";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RegisterForm = () => {

  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success === true && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={style.formContainer} action={formAction}>
      <input type="text" placeholder="User Name" name="username" />
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input type="password" placeholder="Password Again" name="passwordRepeat" />
      <button>Register</button>
      {state?.error && <p> {state.error} </p>}
      <Link href='/login' >Have an account?  <b>Login</b> </Link>
    </form>
  )
}

export default RegisterForm