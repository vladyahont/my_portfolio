import React from 'react'
import s from './Skills.module.css'
import sCont from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import iconSkill from '../img/Flat_tick_icon.svg.png'

export function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sCont.container} + ${s.skillsContainer}`}>
                <div>
                    <h2 className={s.title}>My skills</h2>
                </div>

                <div className={s.skills}>
                    <Skill icon={iconSkill} title={'HTML'}
                           description={'aslkca alscn rkbsrlvk ksvn lskvnslkdvn svsvsv wef ewfweoifj jfe'}/>
                    <Skill icon={iconSkill} title={'CSS'}
                           description={'aca aeveafewo weoif wefowefn weifweif wefowef eiwfoweif eiofjwef'}/>
                    <Skill icon={iconSkill} title={'JS'}
                           description={'ewfkl weifowei oiwefoiwf wiejfiewfl iefjf ijfisdof iesfoskef ijsf fn'}/>
                </div>
            </div>
        </div>
    )
}