import {useState, useEffect} from 'react';
import styles from './contact-form-field.module.scss'

const ContactFormField = ({label, onChange, value, name,  validation = null, checkValidation = false, textarea}) => {
    const [err, setErr] = useState('');

    const handleOnBlur = () => {
        let isValid = true;

        if (validation) {
            isValid = validation(value.trim());
        }

        if (value.trim() === '' || !isValid) {
            console.log(value.trim(), !isValid);
            return setErr('error')
        }
        setErr('');
    }

    useEffect(() => {
        if (checkValidation) {
            handleOnBlur();
        }
    }, [checkValidation])

    return (
        <>
            <div className={styles.TextField}>
                <label className='contact-label'>
                    {label}
                    {textarea ? (
                            <textarea
                                className={err ? styles.error : ""}
                                cols="30"
                                rows="10"
                                value={value}
                                name={name}
                                onChange={onChange}
                                onBlur={handleOnBlur}
                                onFocus={() => setErr("")}
                            />
                        )
                        : (
                            <input
                                type="text"
                                className={err ? styles.error : ""}
                                value={value}
                                name={name}
                                onChange={onChange}
                                onBlur={handleOnBlur}
                                onFocus={() => setErr("")}
                            />
                        )}
                </label>
            </div>
        </>
    );
}

export default ContactFormField;
