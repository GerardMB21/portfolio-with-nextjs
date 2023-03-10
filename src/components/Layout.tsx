import {
  Home,
  Code,
  Briefcase,
  UserTag,
  SidebarLeft,
  SidebarRight
} from 'iconsax-react'
import Head from 'next/head'
import { useState } from 'react'
import styles from '@/styles/Layout.module.css'
import { Variants } from '@/interfaces/iconsaxType'
import { functionVoid } from '@/interfaces/functionsTypes'
import { layoutProps } from '@/interfaces/propsTypes'
import Link from 'next/link'

export default function Layout({ children }: layoutProps) {

  const {
    nav,
    navActive,
    navDisabled,
    main,
    mainActive,
    mainDisabled,
    toggle,
    toggleActive,
    toggleDisabled,
    list,
    listActive,
    listDisabled,
    item,
    icon,
    iconDisabled,
    itemName
  } = styles

  const [menuActive, setMenuActive] = useState<boolean>(false)
  const [variant] = useState<Variants>("Bold")

  const changeMenu: functionVoid = () => {
    setMenuActive(!menuActive)
  }

  return (
    <>
      <Head>
        <title>Gerard Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={ `${ nav } ${ menuActive ? navActive : navDisabled }` }>
        <ul className={ `${ list } ${ menuActive ? listActive : listDisabled }` }>
          <Link href={"#home"}>
            <li className={ item }>
              <Home className={ icon } variant={variant}/>
              <p className={ itemName }>Home</p>
            </li>
          </Link>
          <Link href={"#skills"}>
            <li className={ item }>
              <Code className={ icon } variant={variant}/>
              <p className={ itemName }>Skills</p>
            </li>
          </Link>
          <Link href={"#works"}>
            <li className={ item }>
              <Briefcase className={ icon } variant={variant}/>
              <p className={ itemName }>Works</p>
            </li>
          </Link>
          <Link href={"#contact"}>
            <li className={ item }>
              <UserTag className={ icon } variant={variant}/>
              <p className={ itemName }>Contact</p>
            </li>
          </Link>
        </ul>
      </nav>
      <div className={ `${ toggle } ${ menuActive ? toggleActive : toggleDisabled }` }>
        {
          menuActive ?
          <SidebarLeft className={ `${ icon }` } variant={variant} onClick={changeMenu}/> :
          <SidebarRight className={ `${icon} ${ !menuActive && iconDisabled }` } variant={variant} onClick={changeMenu}/>
        }
      </div>
      <main className={ `${ main } ${ menuActive ? mainActive : mainDisabled }` }>
        { children }
      </main>
    </>
  )
}
