import './LanguageSwitch.css'
import englishIcon from '../../assets/images/icons/english.svg'
import spanishIcon from '../../assets/images/icons/spanish.svg'

const LanguageSwitch = ({ theme }) => {
	return (
		<div className={`language-switch ${theme}`}>
			<img src={englishIcon} alt='English' />
			<div className='language-switch-container'></div>
			<img src={spanishIcon} alt='Spanish' />
		</div>
	)
}
export default LanguageSwitch
