import React from 'react'
import s from './Footer.module.css'
import sCont from "../common/styles/Container.module.css";
export function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${sCont.container} + ${s.footer}`}>
                <h2>Vladislav Yahont</h2>
                <div className={s.blocksCont}>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                    <div className={s.block}></div>
                </div>
                <span>Ⓒ 2023 All rights reserved</span>
            </div>

        </div>
    )
}