import React from 'react'
import s from './Works.module.css'
import sCont from '../common/styles/Container.module.css'
import {Work} from "./work/Work";
import iconWork from '../img/1087815.png'

export function Works() {
    return (
        <div className={s.worksBlock}>
            <div className={`${sCont.container} + ${s.worksContainer}`}>
                <div>
                    <h2 className={s.title}>My works</h2>
                </div>

                <div className={s.works}>
                    <Work icon={iconWork} title={'Project 1'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, suscipit'}/>
                    <Work icon={iconWork} title={'Project 2'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, suscipit'}/>

                </div>
            </div>
        </div>
    )
}