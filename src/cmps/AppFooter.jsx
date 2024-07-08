import { useTranslation } from "react-i18next"

export function AppFooter() {
    const { t } = useTranslation()

    return (
        <footer className="main-layout full app-footer">
            <div className="section-container">
                <h3>{t('tcmTitle')}</h3>
            </div>
        </footer>
    )
}
