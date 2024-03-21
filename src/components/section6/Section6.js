import React from 'react'
import style from "./section.module.css";
import Woman from "../../assets/woman.png";
import Send from "../../assets/sendIcon.svg";

const Section6 = () => {
  return (
    <div className={style.section} id='contact'>
      <div className={style.sectionLeft}>
        <img src={Woman} className={style.woman} alt="" />
      </div>
      <div className={style.sectionRight}>
        <form className={style.form}>
          <p className={style.title}>Связатся с нами</p>
          <p className={style.text}>Оставьте свои данные и наш специалист <br/> обязательно свяжемся с Вами в течение дня</p>
          <input type="text" className={style.input} placeholder='Ваше имя' />
          <input type="tel" className={style.input} placeholder='+998 (___) __ - __ - __' />
          <input type="text" className={`${style.textarea} ${style.input}`} placeholder='Дополнительные комментарии' />
          <button className={style.btn}>
            <a href="#">
              <img src={Send} className={style.send} alt="" />
              Отправить
              </a>
          </button>
        </form>
      </div>
    </div>
  )
}

export  {Section6}
