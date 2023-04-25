import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import './Navbar.css'

const Navbar = () => {
	const { theme } = useContext(ThemeContext)

	return (
		<nav className={`navbar ${theme}`}>
			<div className='navbar-container'>
				<div className='navbar-logo'>
					<Link to={'/'}>Navbar</Link>
					<p className='navbar-title'></p>
				</div>
				<div className='navbar-menu'>
					<ul className='navbar-menu-list'>
						<li className='navbar-menu-list-item'></li>
						<li className='navbar-menu-list-item'></li>
						<li className='navbar-menu-list-item'></li>
						<li className='navbar-menu-list-item'></li>
					</ul>
				</div>
				<div className='navbar-socials'>
					<ul className='navbar-socials-list'>
						<li className='navbar-socials-list-item'></li>
						<li className='navbar-socials-list-item'></li>
						<li className='navbar-socials-list-item'></li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
export default Navbar
