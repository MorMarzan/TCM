import { TextField, ThemeProvider, createTheme } from "@mui/material"
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { useState } from "react"

export function ContactUs() {

    const [userInfo, setUserInfo] = useState({ email: '', fullname: '', phone: '', msg: '' })

    function handleChange({ target }) {
        const { name: field, value } = target
        setUserInfo(prevCreds => ({ ...prevCreds, [field]: value }))
    }

    function handleSubmit(ev) {
        ev.preventDefault()
        console.log(userInfo)
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
            <section className="contact-us grid">
                <form className="login-form grid" onSubmit={handleSubmit} autoComplete="off">

                    <TextField
                        label="Full name"
                        type="text"
                        name="fullname"
                        onChange={handleChange}
                        fullWidth
                        autoComplete="off"
                        required
                        className='form-element text-input'
                    />

                    <TextField
                        label="Email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        fullWidth
                        autoComplete="off"
                        required
                        className='form-element text-input'
                    />

                    <TextField
                        label="Phone"
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
                        placeholder="Your message here"
                        name="msg"
                        onChange={handleChange}
                        className="form-element textarea"

                    />

                    <button className="btn">Submit</button>
                </form>
            </section>
        </ThemeProvider>
    )
}
