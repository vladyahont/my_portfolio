import React from 'react'
import s from './Form.module.css'
import sCont from "../common/styles/Container.module.css";

export function Form() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${sCont.container} + ${s.contactsForm}`}>
                <h2>Contacts</h2>
                <form className={s.formCont}>
                    <input type={"text"}/>
                    <input type={"text"}/>
                    <textarea />
                </form>
                <button className={s.button}>Send</button>
            </div>


        </div>
    )
}