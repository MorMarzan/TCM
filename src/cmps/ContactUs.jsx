import { TextField, ThemeProvider, createTheme } from "@mui/material"
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize'
import { useRef, useState } from "react"
import { useLanguage } from "../contexts/LanguageContext"
import ReCAPTCHA from "react-google-recaptcha"

export function ContactUs({ t, onSubmit }) {

    const [userInfo, setUserInfo] = useState({ email: '', fullname: '', phone: '', msg: '' })
    const { isLangHe } = useLanguage()
    const recaptchaRef = useRef(null);

    function handleChange({ target }) {
        const { name: field, value } = target
        setUserInfo(prevCreds => ({ ...prevCreds, [field]: value }))
    }

    function handleSubmit(ev) {
        ev.preventDefault()

        if (recaptchaRef.current) {
            // Programmatically trigger reCAPTCHA
            recaptchaRef.current.execute();
        }

        // onSubmit(userInfo)
        // resetForm()
    }

    function onRecaptchaResolved(token) {
        // If reCAPTCHA is valid, proceed to submit form
        console.log('reCAPTCHA Token:', token);
        if (token) {
            onSubmit(userInfo);
            resetForm();
        }
    }

    function resetForm() {
        setUserInfo({ email: '', fullname: '', phone: '', msg: '' });
    }

    const theme = createTheme({
        typography: {
            fontFamily: [
                'Montserrat-Regular', 'sans-serif'
            ].join(','),
        },
    })

    return (
        <ThemeProvider theme={theme}>
            <section className="contact-us grid" id="contact-us">
                <form className="login-form grid" onSubmit={handleSubmit} autoComplete="off">

                    <h3 className="title">{t('contact')}</h3>

                    <TextField
                        label={t('name')}
                        type="text"
                        name="fullname"
                        value={userInfo.fullname}
                        onChange={handleChange}
                        fullWidth
                        autoComplete="off"
                        required
                        className={`form-element text-input ${isLangHe ? 'rtl-input' : ''}`}

                    />

                    <TextField
                        label={t('mail')}
                        type="email"
                        name="email"
                        value={userInfo.email}
                        onChange={handleChange}
                        fullWidth
                        autoComplete="off"
                        required
                        className={`form-element text-input ${isLangHe ? 'rtl-input' : ''}`}

                    />

                    <TextField
                        label={t('phone')}
                        type="tel"
                        name="phone"
                        value={userInfo.phone}
                        onChange={handleChange}
                        fullWidth
                        autoComplete="off"
                        className={`form-element text-input ${isLangHe ? 'rtl-input' : ''}`}

                    />

                    <BaseTextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        placeholder={t('msg')}
                        name="msg"
                        value={userInfo.msg}
                        onChange={handleChange}
                        className="form-element textarea"

                    />

                    <ReCAPTCHA
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                        size="invisible"
                        ref={recaptchaRef}
                        onChange={onRecaptchaResolved}
                    />

                    <button className="btn">{t('submit')}</button>
                </form>
            </section>
        </ThemeProvider>
    )
}
