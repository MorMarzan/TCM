import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link'
import hamburger from '/images/icon-hamburger.svg'
import closeIcon from '/images/icon-close.svg'
import { Logo } from "./Logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faGlobe, faXmark } from "@fortawesome/free-solid-svg-icons"

export function AppHeader() {

    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileNavOpen, seIsMobileNavOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 730)
    const navigate = useNavigate()

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
        <>
            <header className={"main-layout full app-header " + headerScrolledClass}>

                <div className={"backdrop " + mobileNavOpenClass} onClick={toggleMobileNav}></div>
                <div className="section-container flex">
                    <Logo />
                    <FontAwesomeIcon icon={faBars} className="hamburger link" onClick={toggleMobileNav}></FontAwesomeIcon>
                    <nav className={"flex app-nav " + mobileNavOpenClass}>
                        {/* <img src={closeIcon} alt="close" className="close" onClick={toggleMobileNav}></img> */}
                        <a className="close" onClick={toggleMobileNav}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></a>
                        <Link smooth to="#contact-us" onClick={toggleMobileNav}>Contact me</Link>
                        <a className="lang-switch flex align-center link" onClick={toggleMobileNav}><FontAwesomeIcon icon={faGlobe} /><span>He</span></a>
                    </nav>
                </div>

            </header>
        </>
    )
}
