import React from 'react'
import s from './Work.module.css'


export function Work(props) {
    return (
        <div className={s.work}>
            <div className={s.imgProject}>
                <a className={s.button} href={props.icon} target='_blank'>View project</a>
            </div>
            <h4 className={s.text}>{props.title}</h4>
            <span className={s.description}>{props.description}</span>
        </div>
    )
}