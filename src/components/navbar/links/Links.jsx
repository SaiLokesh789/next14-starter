"use client"
import Link from "next/link"
import style from './Links.module.css'
import NavLink from "./navLink/NavLink"
import { useState } from "react"
import Image from "next/image"
import { handleLogout } from "@/lib/actions"
import { auth } from "@/lib/auth"

const links = [
  {
    title: "Homepage",
    path: '/'
  },
  {
    title: "About",
    path: '/about'
  },
  {
    title: "Contact",
    path: '/contact'
  },
  {
    title: "Blog",
    path: '/blog'
  },
]

const Links = ({ session }) => {

  //TEMPORARY
  const isAdmin = true;

  const [open, setOpen] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.links}>
        {links.map(link => (
          <NavLink item={link} key={link.title} />
        ))}{
          session?.user ? (
            <>
              {
                session.user?.isAdmin && (
                  <NavLink item={{ title: "Admin", path: "/admin" }}></NavLink>
                )
              }
              <form action={handleLogout}>
                < button className={style.logout}> Logout</button>
              </form>
            </>
          ) : (
            <NavLink item={{ title: "Login", path: "/login" }}></NavLink>
          )
        }
      </div >
      <Image src="/menu.png" alt="menu" width={30} height={30} onClick={() => { setOpen(prev => !prev) }} className={style.menuButton} />

      {
        open && <div className={style.mobileLinks}>
          {links.map(link => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      }
    </div>
  )
}

export default Links