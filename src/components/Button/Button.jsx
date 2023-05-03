import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import './Button.css'

const Button = ({ children, type, style, ...props }) => {
	const { theme } = useContext(ThemeContext)

	return (
		<div className='button-container'>
			<button
				className={`button button-${type || 'main'} ${theme}`}
				style={style}
				{...props}
			></button>
			<div className='button-text'>{children}</div>
		</div>
	)
}
export default Button
