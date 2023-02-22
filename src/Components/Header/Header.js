import React, { useState } from 'react'
import style from './Header.module.css'
import logo from '../../assets/logo.png'
import {HiMenu} from 'react-icons/hi'
import {MdOutlineClose} from 'react-icons/md'
const Header = () => {
    const[active,setActive]=useState("false")
  return (
    <div className={style.Container}>
        <div className={style.MobileHeader}>
            <div className={style.Icon}>
                <HiMenu onClick={()=>{
                    setActive(true)
                }}/>
            </div>
            <div className={style.MLogo}>
                <img src={logo} alt="" />
            </div>
        </div>
        {active? <div className={style.MenuStyle}>
            <div className={style.MMenus}>
                <MdOutlineClose onClick={()=>{
                    setActive(false)
                }}/>
                <ul>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>:""}
       
        <div className={style.Header}>
        <div className={style.logo}>
            <img src={logo} alt="" />
        </div>
        <div className={style.menu}>
            <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className={style.account}>
            <div className={style.Login}>
                <button>Login</button>
            </div>
            <div className={style.Sigin}>
                <button>Signin</button>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Header