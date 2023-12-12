import style from './skills.module.scss'
import {skills} from './skills.data'

const Skills = () => {
    return (
        <div className={style.container}>
            <div className={style.titles}>
                <h1 className='page-title'>Experience</h1>
                <div className={style.description_box}>
                    <h2 className='page-description'>I have the experience and the necessary skills, and I am still learning and practicing more and more.</h2>
                </div>
            </div>
            <div className={style.skills_box}>
                {skills.map(skill => (
                    <div key={skill.id} className={skill.className}>
                        <div className={style.skills_article}>
                            <div className={style.icon_box}>
                                <img className={style.icon} src={skill.icon} alt={skill.alt}/>
                            </div>
                            <h1 className='page-subtitle'>{skill.title}</h1>
                            <p className='page-description--centered'>{skill.text}</p>
                        </div>
                        <div>
                            <h2 className='skill-subtitle'>{skill.subtitle}</h2>
                            <p className='page-description--sm'>{skill.list}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
