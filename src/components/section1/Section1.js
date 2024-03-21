import React from 'react'
import style from "./section1.module.css";

import Img1 from "../../assets/img1.png"
import Img2 from "../../assets/img2.png"
import Img3 from "../../assets/img3.png"

const Section1 = () => {

  const boxes = [
    {
        id: Math.random() * Math.random(),
        img: Img1,
        title: 'Сертифицированные услуги нашей профессиональной команды',
    },
    {
        id: Math.random() * Math.random(),
        img: Img2,
        title: 'Высокие визовые ставки (98% наших студентов получили визу)',
    },
    {
        id: Math.random() * Math.random(),
        img: Img3,
        title: 'Учеба в престижных университетах, которые входят в Топ-1000',  
    }
  ]

  return (
    <section id='uslugi'>
      <div className={style.top}>
        <p className={style.title}>Добро пожаловать в нашу группу <br/> иностранного образования</p>
        <p className={style.text}>Почему мы?</p>
      </div>
      <div className={style.bottom}>
          {
            boxes.map(item => (
              <div className={style.box} key={item.id}>
                <img src={item.img} className={style.img} alt="" />
                <p className={style.boxText}>{item.title}</p>
              </div>
            ))
          }
      </div>
    </section>
  )
}

export  {Section1}
