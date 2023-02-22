import React from 'react'
import style from './Banner.module.css'
import bg from '../../assets/Path 1-mdpi.png'
import chair from '../../assets/Group 542.png'
const Banner = () => {
  return (
    <div className={style.Banner}>
        <div className={style.backgroundImage}>
            <p>Careers</p>
            <img src={bg} alt="" />
        </div>
        <div className={style.Chair}>
        <div className={style.Head}>
                <h1 className={style.Title}>Submit Your Resume</h1>
                <p className={style.Description}>Become discoverable for all our roles</p>
            </div>
        <div className={style.ChairImage}>
            <img src={chair} alt="" />
        </div>
        </div>
        
    </div>
  )
}

export default Banner