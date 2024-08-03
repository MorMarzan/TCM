import { useEffect, useState } from "react"
import { HashLink as Link } from 'react-router-hash-link'
import { Logo } from "./Logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { LangSwitch } from "./LangSwitch"
import { useTranslation } from "react-i18next"

export function AppHeader() {

    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileNavOpen, seIsMobileNavOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 730)
    const { t } = useTranslation()

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    function handleScroll() {
        setIsScrolled(window.scrollY > 0)
    }

    function handleResize() {
        setIsMobile(window.innerWidth < 730)
    }

    function toggleMobileNav() {
        seIsMobileNavOpen(currOpenStatus => !currOpenStatus)
    }

    const headerScrolledClass = isScrolled ? 'scrolled' : ''
    const mobileNavOpenClass = isMobile && isMobileNavOpen ? 'open' : ''

    return (
        <header className={"main-layout full app-header " + headerScrolledClass}>

            <div className={"backdrop " + mobileNavOpenClass} onClick={toggleMobileNav}></div>
            <div className="section-container flex">
                <Logo />
                <FontAwesomeIcon icon={faBars} className="hamburger link" onClick={toggleMobileNav}></FontAwesomeIcon>
                <nav className={"flex app-nav " + mobileNavOpenClass}>
                    <a className="close" onClick={toggleMobileNav}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></a>
                    <Link smooth to="#contact-us" onClick={toggleMobileNav}>{t('contact')}</Link>
                    <LangSwitch toggleMobileNav={toggleMobileNav} />
                </nav>
            </div>

        </header>
    )
}
