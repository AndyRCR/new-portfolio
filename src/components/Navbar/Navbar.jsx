import { Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import NavbarSocials from '../NavbarSocials/NavbarSocials'
import logo from '../../assets/images/icons/logo.png'
import { ModelContext } from '../../context/ModelGlobalContext'
import './Navbar.css'

const Navbar = () => {
	const { theme } = useContext(ThemeContext)
	const { setNeedLoader, setModelLoaded } = useContext(ModelContext)

	const navigate = useNavigate()

	const handleRedirection = () => {
		if (location.pathname === '/') return
		callLoader()
		setTimeout(() => navigate('/'), 1800)
	}

	const callLoader = () => {
		setModelLoaded(false)
		setNeedLoader(true)
	}

	return (
		<nav className={`navbar ${theme}`}>
			<div className='navbar-logo'>
				<img
					onClick={handleRedirection}
					className='logo'
					src={logo}
					alt='andy canales logo'
				/>
				<p className='navbar-title'>Web Developer</p>
			</div>

			<NavbarMenu theme={theme} />

			<NavbarSocials theme={theme} />
		</nav>
	)
}
export default Navbar
