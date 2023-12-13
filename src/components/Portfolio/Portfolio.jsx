import React from "react";
import style from './portfolio.module.scss'
import {items} from "./portfolio.data";

const Portfolio = () => {
    return (
        <div className={style.project_list}>
            {items.map((item =>
                <div key={item.id} className={style.project_item}>
                    <a href="https://marchishe.github.io/todo_list/" target='_blank'><img src={item.src} alt="project-image"/></a>
                </div>
                ))}
        </div>
    )
}

export default Portfolio
