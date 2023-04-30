import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import './ThemeSwitch.css'

const ThemeSwitch = () => {
	const { theme, setTheme } = useContext(ThemeContext)

	const handleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

	return (
		<div className={`theme-switch switch ${theme}`}>
			<svg
				className='theme-switch-icon'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g id='Environment / Sun'>
					<path
						id='Vector'
						d='M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</g>
			</svg>

			<div className='switch-container' onClick={handleTheme}>
				<div className='switch-button'></div>
			</div>

			<svg
				className='theme-switch-icon'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path d='M3,11.985A9.811,9.811,0,0,0,12.569,22a9.528,9.528,0,0,0,8.309-5.059,1,1,0,0,0-.947-1.477l-.11.008c-.131.01-.263.02-.4.02a7.811,7.811,0,0,1-7.569-8.015,8.378,8.378,0,0,1,1.016-4A1,1,0,0,0,11.923,2,9.855,9.855,0,0,0,3,11.985Zm7.343-7.652a10.382,10.382,0,0,0-.488,3.144A9.89,9.89,0,0,0,18.137,17.4,7.4,7.4,0,0,1,12.569,20,7.811,7.811,0,0,1,5,11.985,7.992,7.992,0,0,1,10.343,4.333Z' />
			</svg>
		</div>
	)
}
export default ThemeSwitch
