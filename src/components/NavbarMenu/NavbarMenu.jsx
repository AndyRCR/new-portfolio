import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import { Link, useNavigate } from 'react-router-dom'
import { ModelContext } from '../../context/ModelGlobalContext'
import './NavbarMenu.css'

const NavbarMenu = ({ theme }) => {
	const { setNeedLoader, setModelLoaded } = useContext(ModelContext)

	const navigate = useNavigate()

	const handleRedirectionTo = (path) => {
		if (location.pathname === path) return
		callLoader()
		setTimeout(() => navigate(path), 1800)
	}

	const callLoader = () => {
		setModelLoaded(false)
		setNeedLoader(true)
	}

	return (
		<div className={`navbar-menu ${theme}`}>
			<ul className='navbar-menu-list'>
				<li
					className='navbar-menu-list-item'
					onClick={() => handleRedirectionTo('/')}
				>
					About me
				</li>
				<li
					className='navbar-menu-list-item'
					onClick={() => handleRedirectionTo('/')}
				>
					Skills
				</li>
				<li
					className='navbar-menu-list-item'
					onClick={() => handleRedirectionTo('/')}
				>
					Projects
				</li>
				<li
					className='navbar-menu-list-item last'
					onClick={() => handleRedirectionTo('/contact')}
				>
					Contact
				</li>
			</ul>
		</div>
	)
}
export default NavbarMenu
