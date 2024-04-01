"use client"
import { usePathname } from 'next/navigation'
import style from './NavLink.module.css'
import Link from 'next/link'

const NavLink = ({ item }) => {

  let pathName = usePathname();

  return (
    <Link href={item.path} className={`${style.container} ${pathName === item.path && style.active}`}>{item.title}</Link>
  )
}

export default NavLink