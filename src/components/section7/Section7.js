import React from 'react'
import style from "./section7.module.css";

import Tree from "../../assets/treeLast.png";
import Bus from "../../assets/bus.png";

import Icon1 from "../../assets/icon11.svg"
import Icon2 from "../../assets/icon22.svg"
import Icon3 from "../../assets/icon33.svg"
import Call from "../../assets/call.svg"



const Section7 = () => {
  return (
    <div className={style.section} id='news'>
        <img src={Tree} className={style.tree} alt="" />
        <img src={Bus} className={style.bus} alt="" />
        <div className={style.top}>
            <p className={style.title}>Остались вопросы?</p>
            <p className={style.text}>Свяжитесь с нами и мы ответим на все ваши вопросы</p>
        </div>
        <div className={style.inside}>
            <div className={style.part}>
                <p className={style.title1}>
                    <img src={Icon1} className={style.icon} alt="" />
                    Телефоны</p>
                <p className={style.text1}>+998 (99) 878-63-99</p>
                <p className={style.text1}>+998 (99) 878-63-99</p>
            </div>
            <div className={style.part}>
                <p className={style.title1}>
                <img src={Icon2} className={style.icon} alt="" />
                    Адрес</p>
                <p className={style.text1}>г. Город, ул. Улица, 24 (Офис 24)</p>
            </div>
            <div className={style.part}>
                <p className={style.title1}>
                <img src={Icon3} className={style.icon} alt="" />
                    Время работы</p>
                <p className={style.text1}>Пн-Пт 9:00 - 18:00</p>
            </div>
            <button className={style.btn}>
                <a href="tel: +37477802064" target='_blank'>
                    <img src={Call} className={style.call} alt="" />
                    Связаться с нами
                </a>
            </button>
        </div>
    </div>
  )
}

export  {Section7}
