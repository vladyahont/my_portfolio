import React from 'react'
import s from './Nav.module.css'

export function Nav() {
    return (
        <div className={s.nav }>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Portfolio</a>
            <a href="">Contact</a>
        </div>
    )
}