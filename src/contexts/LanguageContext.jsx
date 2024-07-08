import { createContext, useContext, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
    const { i18n } = useTranslation()
    const location = useLocation()
    const navigate = useNavigate()
    const [isLangHe, setIsLangHe] = useState(false)

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search)
        const lang = searchParams.get('lang')
        if (lang && ['he'].includes(lang)) {
            i18n.changeLanguage('he')
            setIsLangHe(true)
        }
    }, [location.search, i18n])

    useEffect(() => {
        document.body.classList.toggle('rtl', isLangHe)
    }, [isLangHe])

    const toggleLanguage = () => {
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
        <LanguageContext.Provider value={{ isLangHe, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    return useContext(LanguageContext)
}
