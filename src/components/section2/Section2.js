import React, { useRef } from 'react'
import style from "./section2.module.css";
import RightArrow from "../../assets/rightArrow.svg";

import Moscow from "../../assets/moscow.png"

const Section2 = () => {

  const slider = useRef(null);

  const boxes = [
    {
        id: Math.random() * Math.random(),
        img: Moscow,
        title: 'Россия',
        text: '15 вузов',
    },
    {
        id: Math.random() * Math.random(),
        img: Moscow,
        title: 'Россия',
        text: '15 вузов',
    },
    {
        id: Math.random() * Math.random(),
        img: Moscow,
        title: 'Россия',
        text: '15 вузов',
    },
    {
        id: Math.random() * Math.random(),
        img: Moscow,
        title: 'Россия',
        text: '15 вузов',
    },
    {
        id: Math.random() * Math.random(),
        img: Moscow,
        title: 'Россия',
        text: '15 вузов',
    },
    {
        id: Math.random() * Math.random(),
        img: Moscow,
        title: 'Россия',
        text: '15 вузов',
    },
    {
        id: Math.random() * Math.random(),
        img: Moscow,
        title: 'Россия',
        text: '15 вузов',
    },
    {
        id: Math.random() * Math.random(),
        img: Moscow,
        title: 'Россия',
        text: '15 вузов',
    },
    {
        id: Math.random() * Math.random(),
        img: Moscow,
        title: 'Россия',
        text: '15 вузов',
    },
    {
        id: Math.random() * Math.random(),
        img: Moscow,
        title: 'Россия',
        text: '15 вузов',
    },
    {
        id: Math.random() * Math.random(),
        img: Moscow,
        title: 'Россия',
        text: '15 вузов',
    },
  ]

  return (
    <section className={style.section}>
        <div className={style.top}>
            <p className={style.title}>Университеты</p>
            <p className={style.text}>В нашем каталоге вы найдете более <span className={style.words}>100 университетов</span> из более чем <span className={style.words}>14 стран</span></p>
        </div>
        <div className={style.bottom}>
            <div className={style.slider} ref={slider}>
                {
                    boxes.map(item => (
                        <div className={style.box} key={item.id}>
                            <div className={style.forImg}>
                                <img src={item.img} className={style.imga} alt="" />
                            </div>
                            <div className={style.forText}>
                                <p className={style.boxTitle}>{item.title}</p>
                                <p className={style.boxText}>{item.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <img src={RightArrow} className={style.right} alt="" onClick={() => {
                slider.current.scrollBy(300,0)
            }} />
            <img src={RightArrow} className={style.left} alt="" onClick={() => {
                slider.current.scrollBy(-300,0)
            }} />
        </div>
    </section>
  )
}

export  {Section2}
