import React from 'react'
import s from './HireButton.module.css'
import sCont from '../common/styles/Container.module.css'

export function HireButton() {
    return (
        <div className={s.hireButtonBlock}>
            <div className={`${sCont.container} + ${s.hireButtonContainer}`}>
                <div>
                    <h2 className={s.title}>Looking into remote work options</h2>
                </div>
                <div>
                    <button style={{height:'33px'}}>Hire me</button>
                </div>
            </div>
        </div>
    )
}