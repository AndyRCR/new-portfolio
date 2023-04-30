import { useContext } from 'react'
import englishIcon from '../../assets/images/icons/english.svg'
import spanishIcon from '../../assets/images/icons/spanish.svg'
import { LanguageContext } from '../../context/LanguageGlobalContext'
import './LanguageSwitch.css'

const LanguageSwitch = ({ theme }) => {
	const { language, setLanguage } = useContext(LanguageContext)

	const handleLanguage = () => setLanguage(language === 'en' ? 'es' : 'en')

	return (
		<div
			className={`language-switch switch ${theme} ${language}`}
			onClick={handleLanguage}
		>
			<img src={englishIcon} alt='English' />
			<div className='switch-container'>
				<div className='switch-button'></div>
			</div>
			<img src={spanishIcon} alt='Spanish' />
		</div>
	)
}
export default LanguageSwitch
