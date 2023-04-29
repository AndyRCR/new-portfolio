import { useContext } from 'react'
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import './PageOptions.css'

const PageOptions = () => {
	const { theme } = useContext(ThemeContext)

	return (
		<div className={`page-options ${theme}`}>
			<LanguageSwitch theme={theme} />
			<div className='separator'></div>
			<ThemeSwitch />
		</div>
	)
}
export default PageOptions
