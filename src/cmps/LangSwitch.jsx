import { useTranslation } from "react-i18next"
import { useLocation, useNavigate } from "react-router-dom"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"


export function LangSwitch() {

    const navigate = useNavigate()
    const { i18n } = useTranslation()
    const location = useLocation()
    const [isLangHe, setIsLangHe] = useState(false)

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search)
        const lang = searchParams.get('lang')
        if (lang && ['he'].includes(lang)) {
            i18n.changeLanguage(lang)
            setIsLangHe(true)
        }
    }, [])

    function toggleLanguage() {
        const lngToSwitch = isLangHe ? 'en' : 'he'
        setIsLangHe(!isLangHe)
        i18n.changeLanguage(lngToSwitch)
        if (lngToSwitch === 'he') {
            navigate(`?lang=he`)
        } else {
            navigate(location.pathname) // Navigate to the same path without search params
        }
    }

    return (
        <button onClick={toggleLanguage} className="lang-switch flex align-center link">
            <FontAwesomeIcon icon={faGlobe} />
            <span>{isLangHe ? 'EN' : 'HE'}</span>
        </button>
    )
}
