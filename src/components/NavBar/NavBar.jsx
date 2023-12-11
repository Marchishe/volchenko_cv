import {NavLink} from "react-router-dom"
import { items } from './navbar.data.js'
import style from './navbar.module.scss'

const NavBar = () => {
    return (
        <>
            <div className={style.nav}>
                <ul className={style.nav_list}>
                    {items.map(item => (
                        <NavLink key={item.id} className='nav-item' to={item.link}><span>{item.name}</span></NavLink>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default NavBar
