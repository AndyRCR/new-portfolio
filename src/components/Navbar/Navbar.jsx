import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import NavbarSocials from '../NavbarSocials/NavbarSocials'
import logo from '../../assets/images/icons/logo.png'
import './Navbar.css'

const Navbar = () => {
	const { theme } = useContext(ThemeContext)

	return (
		<nav className={`navbar ${theme}`}>
			<div className='navbar-logo'>
				<Link to={'/'}>
					<img className='logo' src={logo} alt='andy canales logo' />
				</Link>
				<p className='navbar-title'>Web Developer</p>
			</div>

			<NavbarMenu theme={theme} />

			<NavbarSocials theme={theme} />
		</nav>
	)
}
export default Navbar
