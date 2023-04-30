import englishIcon from '../../assets/images/icons/english.svg'
import spanishIcon from '../../assets/images/icons/spanish.svg'
import './LanguageSwitch.css'

const LanguageSwitch = ({ theme }) => {
	return (
		<div className={`language-switch switch ${theme}`}>
			<img src={englishIcon} alt='English' />
			<div className='switch-container'>
				<div className='switch-button'></div>
			</div>
			<img src={spanishIcon} alt='Spanish' />
		</div>
	)
}
export default LanguageSwitch
