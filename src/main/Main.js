import React from 'react'
import s from './Main.module.css'
import sCont from '../common/styles/Container.module.css'

export function Main() {
    return (
        <div className={s.mainBlock }>
            <div className={sCont.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I'm Vlad Yahont</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}>
                    <img src={''} alt={''}/>
                </div>
            </div>
        </div>
    )
}