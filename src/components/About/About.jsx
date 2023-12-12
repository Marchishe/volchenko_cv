import style from './about.module.scss'
import {Link} from "react-router-dom";
import {links} from './about.data';
import myPhoto from '../../images/myPhoto.png';

const About = () => {
    return (
        <>
            <div className={style.about_info}>
                <div className={style.about_info_text}>
                    <h1 className='page-title'><span className='page-title--gray'> I`m</span> Marko<span className='page-title--blue'> Volchenko</span></h1>
                    <div className={style.about_subtitle_box}>
                        <h2 className='page-subtitle'>Frontend Developer</h2>
                    </div>
                    <p className='page-description'>Hello! My name is Marko. I am an outgoing junior
                        front-end developer with a desire to learn
                        and grow in a friendly team environment. I am interested in new technologies and enjoy
                        learning something new to improve my skills and become more experienced.
                    </p>
                    <div className={style.about_buttons}>
                        <button className='main-btn'><Link to='/contact' className={style.about_cv_link}>Hire me</Link></button>
                        <button className='main-btn'><a
                            className={style.about_cv_link}
                            href="https://drive.google.com/file/d/12nWKxs8_MZeNily7Fi5YBKG9Qnfpakgh/view?usp=sharing"
                            target='_blank' rel="noreferrer">CV</a>
                        </button>
                    </div>
                </div>
                <div className={style.about_photo_links}>
                    <div className='photo-box'>
                        <img className={style.about_photo} src={myPhoto} alt="my-photo"/>
                    </div>
                    <div className={style.social_links}>
                        {links.map(link =>
                            <a key={link.id} className={style.social_link} href={link.href} target='_blank'
                               rel="noreferrer">
                                <img className={link.className} src={link.src} alt="github"/>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
