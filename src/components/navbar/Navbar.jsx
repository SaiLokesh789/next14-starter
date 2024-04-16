import { auth } from "@/lib/auth";
import Links from "./links/Links"
import style from './Navbar.module.css'
import Link from "next/link"

const Navbar = async () => {

  const session = await auth();

  return (
    <div className={style.cont}>
      <Link href="/" className={style.logo}>Logo</Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  )
}

export default Navbar