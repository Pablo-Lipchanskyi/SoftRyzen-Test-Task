import { useTranslation } from 'react-i18next';
import LanguageSelector from "../LangSelect/LangSelector"

export const Header = () => {
    const { t } = useTranslation();

    return (
        <>
            <h1>{t("Event")}{t("Planner")}</h1>
            <LanguageSelector />
        </>
    )
}