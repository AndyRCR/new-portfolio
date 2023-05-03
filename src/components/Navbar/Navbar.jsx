import { Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import NavbarSocials from '../NavbarSocials/NavbarSocials'
import logo from '../../assets/images/icons/logo.png'
import useRedirection from '../../hooks/useRedirection'
import { LanguageContext } from '../../context/LanguageGlobalContext'
import './Navbar.css'

const Navbar = () => {
	const { theme } = useContext(ThemeContext)
	const { language } = useContext(LanguageContext)

	const { handleRedirectionTo } = useRedirection()

	return (
		<nav className={`navbar ${theme}`}>
			<div className='navbar-logo'>
				<img
					onClick={() => handleRedirectionTo('/')}
					className='logo'
					src={logo}
					alt='andy canales logo'
				/>
				<p className='navbar-title'>
					{language === 'en' ? 'Web Developer' : 'Desarrollador Web'}
				</p>
			</div>

			<NavbarMenu theme={theme} />

			<NavbarSocials theme={theme} />
		</nav>
	)
}
export default Navbar
