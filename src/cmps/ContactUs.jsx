import { TextField, ThemeProvider, createTheme } from "@mui/material"
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { useState } from "react"

export function ContactUs({ t }) {

    const [userInfo, setUserInfo] = useState({ email: '', fullname: '', phone: '', msg: '' })

    function handleChange({ target }) {
        const { name: field, value } = target
        setUserInfo(prevCreds => ({ ...prevCreds, [field]: value }))
    }

    function handleSubmit(ev) {
        ev.preventDefault()
        console.log(userInfo)
        //thank you and reset
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
                        onChange={handleChange}
                        fullWidth
                        autoComplete="off"
                        required
                        className='form-element text-input'
                    />

                    <TextField
                        label={t('mail')}
                        type="email"
                        name="email"
                        onChange={handleChange}
                        fullWidth
                        autoComplete="off"
                        required
                        className='form-element text-input'
                    />

                    <TextField
                        label={t('phone')}
                        type="tel"
                        name="phone"
                        onChange={handleChange}
                        fullWidth
                        autoComplete="off"
                        className='form-element text-input'
                    />

                    <BaseTextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        placeholder={t('msg')}
                        name="msg"
                        onChange={handleChange}
                        className="form-element textarea"

                    />

                    <button className="btn">{t('submit')}</button>
                </form>
            </section>
        </ThemeProvider>
    )
}
