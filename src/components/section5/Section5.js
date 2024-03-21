import React, { useState } from 'react'
import style from "./section5.module.css";

import Plus from "../../assets/plus.svg";
import Minus from "../../assets/minus.svg";

const Section5 = () => {

    const [openBox, setOpenBox] = useState(false);


    const comments = [
        {
            id: Math.random() * Math.random(),
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. ',
        },
        {
            id: Math.random() * Math.random(),
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. ',
        },
        {
            id: Math.random() * Math.random(),
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. ',
        },
        {
            id: Math.random() * Math.random(),
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod?',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. ',    
        }
    ]

  return (
    <div className={style.section}>
        <div className={style.top}>
            <p className={style.title}>Вопросы и ответы</p>
        </div>
        <div className={style.bottom}>
            {
                comments.map(item => (
                    <div className={openBox ? `${style.box} ${style.boxOpen}` : style.box} key={item.id}>
                        <img src={openBox ? Minus : Plus} alt="" className={style.plus} onClick={() => {
                            setOpenBox(!openBox)
                        }} />
                        <p className={style.boxTitle}>{item.title}</p>
                        <p className={openBox ? style.boxTextOpen : style.boxText}>{item.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export  {Section5}
