import {useState, useEffect} from 'react';
import ContactFormField from '../ContactFormField/ContactFormField.jsx';
import ContactSelect from "./ContactSelect.jsx";
import valideteEmail from '../../helpers/valideteEmail.js';

import {clips} from './contact.data.js'

import style from './contact.module.scss'

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [info, setInfo] = useState('');
    const [file, setFile] = useState('');
    const [policy, setPolicy] = useState(false);

    const [disabled, setDisabled] = useState(true);
    const [checkValidation, setValidation] = useState(false);

    useEffect(() => {
        if (name === '' || email === '' || !valideteEmail(email) || msg === '' || policy === false) {
            return setDisabled(true)
        }
        setDisabled(false);
    }, [name, email, msg, policy])

    const getInfoValue = (options) => {
        console.log(info);
        return info ? options.find(c => c.value === info) : ''
    }

    const onChangeInfo = (newValue) => {
        setInfo(newValue.value)
    }

    const handleSubmit = () => {
        setValidation(true);

        if (!disabled) {
            setName('');
            setEmail('');
            setMsg('');
            setInfo('');
            setFile('');
            setPolicy(false);
            setDisabled(true);
            setValidation(false);
        }
    }


    return (
            <div className={style.form}>
                <form id='form' >
                    <div className={style.titles}>
                        <h1 className='page-title'>Contact me</h1>
                        <div className={style.description_box}>
                            <h2 className='page-description--nowrap'>Have a question or want to work together? Contact me now or send a email here.</h2>
                        </div>
                    </div>
                    <ContactFormField
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                        value={name}
                        label='Name*'
                        name='name'
                        checkValidation={checkValidation}
                    />
                    <ContactFormField
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        value={email}
                        label='E-mail*'
                        name='email'
                        validation={valideteEmail}
                        checkValidation={checkValidation}
                    />
                    <ContactFormField
                        onChange={(e) => {
                            setMsg(e.target.value)
                        }}
                        value={msg}
                        label='Message*'

                        name='message'
                        checkValidation={checkValidation}
                        textarea
                    />
                    <div className={style.form_item}>
                        <h1 className='contact-label'>How did you know about me?</h1>
                        <ContactSelect value={getInfoValue} setValue={onChangeInfo}/>
                    </div>
                    <div className={style.form_item}>
                        <div className={style.file_container}>
                            <div className='contact-label'>Attach file</div>
                            <div className={style.file}>
                                <div className={style.file_item}>
                                    <input accept='.jpg, .png, .gif, .pdf' type="file" name='image'
                                           className={style.file_input}/>
                                    {clips.map(clip =>(
                                    <div key={clip.id} className={style.file_button}>
                                        <img src={clip.src} className={clip.className} alt="clip-icon"/>
                                    </div>
                                    ))}
                                </div>
                                <div className={style.file_preview}></div>
                            </div>
                        </div>
                    </div>
                    <div className={style.form_submit_block}>
                            <div className='checkbox'>
                                <input id='formAgreement' checked={policy} onChange={() => {
                                    setPolicy(!policy)
                                }} type="checkbox" name='agreement'
                                       className='checkbox-input'/>
                                <label htmlFor="formAgreement" className='checkbox-label'>
                                    <span className='checkbox-text'>I give my consent to the processing of personal data.*</span>
                                </label>
                            </div>
                        <button className={`${disabled ? 'btn-disabled' : ''} main-btn`} onClick={(() => handleSubmit())} type='button'>Send</button>
                    </div>
                </form>
            </div>
    )
}


export default Contact
