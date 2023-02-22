import React from 'react'
import style from './Footer.module.css'
import Logo from '../../assets/logo (1).png';
import AppStore from '../../assets/appStore.png'
import PlayStore from '../../assets/playStore.png'
import { FaFacebookF,FaInstagram,FaYoutube } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";
const Footer = () => {
  return (
    <div className={style.Container}>
      <div className={style.Footer}>
        <div className={style.FooterContent}>
           <div className={style.About}>
            <div className={style.Logo}>
              <img src={Logo} alt="" />
            </div>
            <div className={style.Description}>
              <p>KIVLIK is a mobile steam car wash company, which offers premium car wash and detailing services at your doorstep. Conveniently book a car wash with a few taps on your phone. KIVLIK has several packages to meet your budget and requirements. Conveniently book a carwash with a few taps using the KIVLIK App or website.</p>
            </div>
        </div>
        <div className={style.Menu}>
          <h1 className={style.Head}>Company</h1>
          <ul>
            <li>Who We Are</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Report Fraud</li>
            <li>Contact</li>
            <li>Investor Relation</li>
          </ul>
        </div>
        <div className={style.Help}>
          <h1 className={style.Head}>Got Questions?</h1>
          <p className={style.HelpCenter}>Help Center</p>
          <div className={style.SocialMedia}>
            <p>Follow us</p>
            <div className={style.icons}>
             <FaFacebookF />
              <FaInstagram/>
              <RxTwitterLogo/>
              <FaYoutube />
            </div>
          </div>
          <div className={style.AppIcons}>
            <div className={style.AppStore}>
              <img src={AppStore} alt="" />
            </div>
            <div className={style.PlayStore}>
              <img src={PlayStore} alt="" />
            </div>
          </div>
        </div>
        </div>
       
      </div>
      <div className={style.Copyright}>
          <p>©2021 Kivlik. All rights reserved.</p>
          <div className={style.menu}>
            <ul>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
              <li>Sitemap</li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Footer