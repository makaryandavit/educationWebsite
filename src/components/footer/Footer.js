import React from 'react'
import style from "./footer.module.css";
import Icon1 from "../../assets/insta.svg"
import Icon2 from "../../assets/fb.svg"
import Icon3 from "../../assets/teleg.svg"

const Footer = () => {
  return (
    <footer className={style.footer}>
        <a href="">
            <img src={Icon1} className={style.icon} alt="" />
        </a>
        <a href="">
            <img src={Icon2} className={style.icon} alt="" />
        </a>
        <a href="">
            <img src={Icon3} className={style.icon} alt="" />
        </a>
    </footer>
  )
}

export  {Footer}
