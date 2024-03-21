import React from 'react'
import style from "./section3.module.css";

import User1 from "../../assets/user1.png"
import User2 from "../../assets/user2.png"
import User3 from "../../assets/user3.png"

import Tree from "../../assets/tree1.png"

const Section3 = () => {

  const boxes = [
    {
        id: Math.random() * Math.random(),
        userImg: User1,
        userName: 'Александр Иванов',
        discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit!',
    },
    {
        id: Math.random() * Math.random(),
        userImg: User2,
        userName: 'Александр Иванов',
        discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit!',
    },
    {
        id: Math.random() * Math.random(),
        userImg: User3,
        userName: 'Александр Иванов',
        discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit!',
    }
  ]

  return (
    <section className={style.section} id='about'>
        <img src={Tree} className={style.tree} alt="" />
        <div className={style.top}>
            <p className={style.title}>Отзывы наших студентов</p>
        </div>
        <div className={style.bottom}>
            {
                boxes.map(item => (
                    <div className={style.box} key={item.id}>
                        <img src={item.userImg} className={style.user} alt="" />
                        <p className={style.userName}>{item.userName}</p>
                        <p className={style.userText}>{item.discription}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export  {Section3}
