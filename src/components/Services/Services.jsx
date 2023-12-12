import style from "../Services/services.module.scss";
import {services} from './services.data'

const Services = () => {
    return (
        <>
            <div className={style.container}>
                <div><h1 className='page-title'>Services</h1></div>
                <div className={style.services_list}>
                    {services.map(service => (
                        <div key={service.id} className={service.className}>
                            <div className={style.icon_box}>
                                <img className={style.icon} src={service.icon} alt={service.alt}/>
                            </div>
                            <h1 className='page-subtitle'>{service.title}</h1>
                            <p className='page-description--centered'>{service.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Services
