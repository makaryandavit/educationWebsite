import React, { useState } from 'react'
import style from "./header.module.css";

import Logo from "../../assets/logo.svg";
import Sms from "../../assets/sms.svg"

import Call from "../../assets/call.svg"


const Header = () => {

    const [burger, setBurger] = useState(false);
    const [fixed, setFixed] = useState(false);

    if(burger){
        document.body.style.overflow = 'hidden'
    }else{
        document.body.style.overflow = 'unset'
    }

   window.onscroll = function(){
    if(window.scrollY > 60){
        setFixed(true)
    }else{
        setFixed(false)
    }
   }

    const links = [
        {
            id: Math.random() * Math.random() * 0.54,
            text: 'Главная',
            url: '',    
        },
        {
            id: Math.random() * Math.random() * 0.54,
            text: 'О нас',
            url: '',
        },
        {
            id: Math.random() * Math.random() * 0.54,
            text: 'Услуги',
            url: '',
        },
        {
            id: Math.random() * Math.random() * 0.54,
            text: 'Университеты',
            url: '',
        },
        {
            id: Math.random() * Math.random() * 0.54,
            text: 'Студенты',
            url: '',
        },
        {
            id: Math.random() * Math.random() * 0.54,
            text: 'Новости',
            url: '',
        },
        {
            id: Math.random() * Math.random() * 0.54,
            text: 'Контакты',
            url: '',
        }
    ]

  return (
    <header>
        <div className={style.navigation}>
            <div className={fixed ? `${style.navigationInside} ${style.fixedNavigation}` : style.navigationInside}>
                <img src={Logo} className={style.logo} alt="" />
                <ul className={style.ul}>
                    {
                        links.map(item => (
                            <li key={item.id}>
                                <a className={style.link} href={item.url}>{item.text}</a>
                            </li>
                        ))
                    }
                </ul>
                <img src={Sms} className={style.sms} alt="" />
                <div className={style.burger}>
                    <div className={style.lines} onClick={() => {
                        setBurger(!burger)
                    }}>
                        <div className={burger ? `${style.line} ${style.line1Change}` : `${style.line} ${style.line1}`}></div>
                        <div className={burger ? `${style.line} ${style.line2Change}` : `${style.line} ${style.line2}`}></div>
                        <div className={burger ? `${style.line} ${style.line3Change}` : `${style.line} ${style.line3}`}></div>
                    </div>
                    <div className={burger ? `${style.comeBurger} ${style.burgerDown}` : style.burgerDown}>
                        <ul className={style.burgerUl}>
                            {
                                 links.map(item => (
                                    <li className={style.burgerLi} key={item.id}>
                                        <a className={style.burgerLink} href={item.url}>{item.text}</a>
                                    </li>
                                ))
                            }
                        </ul>
                        <img src={Sms} className={style.burgerSms} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className={style.inside}>
            <p className={style.title}>Грант и контрактное обучение в <span className={style.specialWord}>зарубежных</span> вузах</p>
            <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
            <button className={style.btn}>
                <a href="tel: +37477802064" target='_blank'>
                    <img src={Call} className={style.call} alt="" />
                    Связаться с нами
                </a>
            </button>
        </div>
    </header>
  )
}

export  {Header}
