import { ContactUs } from '../cmps/ContactUs'
import logo from '/images/hands-favicon.png'
import snails from '/images/snails.png'
import flower from '/images/flower.jpg'
import { Trans, useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'


export function HomePage() {

    const { t } = useTranslation()

    async function onSubmit({ email, fullname, msg, phone, recaptchaToken }) {
        try {
            const templateParams = {
                from_name: fullname,
                from_email: email,
                message: msg,
                phone: phone,
                'g-recaptcha-response': recaptchaToken
            }

            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_USER_ID
            )

            // console.log('Email sent:', result.text)
            const successMsg = t('successMsg')
            showSuccessMsg(successMsg)

        } catch (error) {

            console.error('Error sending email:', error)
            const errorMsg = t('errorMsg')
            showErrorMsg(errorMsg)

        }
    }

    return (
        <div className="home-page full main-layout grid">
            <section className="hero grid align-center">
                <div className='headers'>
                    <h2>{t('tcmTitle')}</h2>
                    <h3>{t('tcmSecTitle')}</h3>
                </div>
                <div className="img-wrapper">
                    <img src={logo}></img>
                </div>
            </section>

            <section className="main grid">
                <div className="img-wrapper">
                    <img src={flower}></img>
                </div>
                <div className='content'>
                    <p>
                        <Trans i18nKey="tcmIntro" >
                            TCM is a 3 month one-on-one program, where you will learn how to <mark>significantly</mark> improve the way you take care of yourself.
                        </Trans>
                    </p>
                    <p>{t('tcmBasic')}</p>
                    <p>
                        <Trans i18nKey="tcmFirstSixSessions" >
                            The first 6 sessions cover the learning process and the rest will work towards supporting you to get established in taking <mark>really good</mark> care of yourself.
                        </Trans>
                    </p>
                    <p>
                        <Trans i18nKey="tcmTools" >
                            The tools used as part of this program work, but the emphasis is not on any specific tool, it goes much deeper; The process helps develop <mark>clarity</mark> about what is most important <mark>for you</mark> and the <mark>determination</mark> to make your life much better.
                            Through the program, you will learn how to break habit patterns which work against you, and instead develop habits that <mark>really</mark> help you. It will also strengthen your ability to observe your life and the choices you make through a new lens.
                        </Trans>
                    </p>
                    <p>{t('tcmSimple')}</p>
                    <p>
                        <mark>{t('tcmMaybeTime')}</mark>
                        <br></br>
                        <span> {t('tcmHelp')}</span>
                    </p>
                </div>
            </section>


            <ContactUs t={t} onSubmit={onSubmit} />

            <div className="img-wrapper-deco flex justify-center">
                <img src={snails}></img>
            </div>
        </div>
    )
}
