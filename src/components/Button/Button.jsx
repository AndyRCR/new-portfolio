import { useContext } from 'react'
import './Button.css'
import { ThemeContext } from '../../context/ThemeGlobalContext'

const Button = ({ children, type, style, ...props }) => {
	const { theme } = useContext(ThemeContext)

	return (
		<button
			className={`button button-${type || 'main'} ${theme}`}
			style={style}
			{...props}
		>
			{children}
		</button>
	)
}
export default Button
