import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import './ThemeSwitch.css'

const ThemeSwitch = () => {
	const { theme, setTheme } = useContext(ThemeContext)

	const handleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

	return (
		<div className={`themeSwitch ${theme}`}>
			<button onClick={handleTheme}>Cambiar tema</button>
		</div>
	)
}
export default ThemeSwitch
