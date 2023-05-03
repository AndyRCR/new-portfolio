import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import { Link } from 'react-router-dom'
import useRedirection from '../../hooks/useRedirection'
import { LanguageContext } from '../../context/LanguageGlobalContext'
import './NavbarMenu.css'

const NavbarMenu = ({ theme }) => {
	const { language } = useContext(LanguageContext)

	const { handleRedirectionTo } = useRedirection()

	return (
		<div className={`navbar-menu ${theme}`}>
			<ul className='navbar-menu-list'>
				<li
					className='navbar-menu-list-item'
					onClick={() => handleRedirectionTo('/')}
				>
					{language === 'en' ? 'About me' : 'Acerca de mí'}
				</li>
				<li
					className='navbar-menu-list-item'
					onClick={() => handleRedirectionTo('/')}
				>
					{language === 'en' ? 'Skills' : 'Habilidades'}
				</li>
				<li
					className='navbar-menu-list-item'
					onClick={() => handleRedirectionTo('/')}
				>
					{language === 'en' ? 'Projects' : 'Proyectos'}
				</li>
				<li
					className='navbar-menu-list-item last'
					onClick={() => handleRedirectionTo('/contact')}
				>
					{language === 'en' ? 'Contact' : 'Contacto'}
				</li>
			</ul>
		</div>
	)
}
export default NavbarMenu
