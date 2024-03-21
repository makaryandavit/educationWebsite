import React, { useRef } from 'react'
import style from "./section4.module.css";
import RightArrow from "../../assets/rightArrow.svg";

import Student from "../../assets/sudent.png"

const Section4 = () => {

  const slider = useRef(null);

  const boxes = [
    {
        id: Math.random() * Math.random(),
        img: Student,
    },
    {
        id: Math.random() * Math.random(),
        img: Student,
    },
    {
        id: Math.random() * Math.random(),
        img: Student,
    },
    {
        id: Math.random() * Math.random(),
        img: Student,
    },
    {
        id: Math.random() * Math.random(),
        img: Student,
    },
    {
        id: Math.random() * Math.random(),
        img: Student,
    },
    {
        id: Math.random() * Math.random(),
        img: Student,
    },
    {
        id: Math.random() * Math.random(),
        img: Student,
    },
    {
        id: Math.random() * Math.random(),
        img: Student,
    },
    {
        id: Math.random() * Math.random(),
        img: Student,
    },
    {
        id: Math.random() * Math.random(),
        img: Student,
    },
  ]

  return (
    <section className={style.section} id='students'>
        <div className={style.top}>
            <p className={style.title}>Фотографии наших студентов</p>
        </div>
        <div className={style.bottom}>
            <div className={style.slider} ref={slider}>
                {
                    boxes.map(item => (
                        <div className={style.box} key={item.id}>
                            <div className={style.forImg}>
                                <img src={item.img} className={style.imga} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
            <img src={RightArrow} className={style.right} alt="" onClick={() => {
                slider.current.scrollBy(250,0)
            }} />
            <img src={RightArrow} className={style.left} alt="" onClick={() => {
                slider.current.scrollBy(-250,0)
            }} />
        </div>
    </section>
  )
}

export  {Section4}
