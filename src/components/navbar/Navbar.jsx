import Links from "./links/Links"
import style from './Navbar.module.css'
import Link from "next/link"

const Navbar = () => {
  return (
    <div className={style.cont}>
      <Link href="/" className={style.logo}>Logo</Link>
      <div>
        <Links />
      </div>
    </div>
  )
}

export default Navbar