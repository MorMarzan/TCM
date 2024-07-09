import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useLanguage } from "../contexts/LanguageContext"


export function LangSwitch() {
    const { isLangHe, toggleLanguage } = useLanguage()

    return (
        <button hrefLang={isLangHe ? 'en' : 'he'} onClick={toggleLanguage} className="lang-switch btn light flex align-center link">
            <span>{isLangHe ? 'English' : 'עברית'}</span>
            <FontAwesomeIcon icon={faGlobe} />
        </button>
    )
}
