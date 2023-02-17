import React from 'react'
import s from './Skill.module.css'


export function Skill(props) {
    return (
        <div className={s.skill}>
            <img className={s.icon} src={props.icon} alt={''}/>
            <h3 className={s.text}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    )
}