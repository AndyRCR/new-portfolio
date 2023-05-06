import { Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useRef } from 'react'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import { LanguageContext } from '../../context/LanguageGlobalContext'
import blackmenuicon from '../../assets/lotties/blackmenuicon.json'
import whitemenuicon from '../../assets/lotties/whitemenuicon.json'
import Lottie from 'lottie-react'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import NavbarSocials from '../NavbarSocials/NavbarSocials'
import logo from '../../assets/images/icons/logo.png'
import useRedirection from '../../hooks/useRedirection'
import './Navbar.css'

const Navbar = () => {
	const { theme, closedNavbar, setClosedNavbar } = useContext(ThemeContext)
	const { language } = useContext(LanguageContext)

	const { handleRedirectionTo } = useRedirection()

	const lottieRef = useRef(null)

	const animation = () => {
		if (closedNavbar) {
			lottieRef.current.playSegments([71, 140], true)
		} else {
			lottieRef.current.playSegments([0, 70], true)
		}
	}

	const handleMenuClick = () => {
		animation()
		setClosedNavbar(true)
	}

	useEffect(() => {
		animation()
	}, [closedNavbar])

	return (
		<nav
			className={`navbar ${theme}`}
			style={{ left: closedNavbar ? '-100%' : '0' }}
		>
			<div onClick={handleMenuClick} className='navbar-button mobile'>
				<Lottie
					lottieRef={lottieRef}
					loop={false}
					autoPlay={false}
					animationData={
						theme === 'dark' ? whitemenuicon : blackmenuicon
					}
				/>
			</div>

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
