import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import { Link } from 'react-router-dom'
import './NavbarMenu.css'

const NavbarMenu = ({ theme }) => {
	return (
		<div className={`navbar-menu ${theme}`}>
			<ul className='navbar-menu-list'>
				<li>
					<Link className='navbar-menu-list-item' to='/'>
						About me
					</Link>
				</li>
				<li>
					<Link className='navbar-menu-list-item' to='/'>
						Skills
					</Link>
				</li>
				<li>
					<Link className='navbar-menu-list-item' to='/'>
						Projects
					</Link>
				</li>
				<li>
					<Link className='navbar-menu-list-item' to='/contact'>
						Contact
					</Link>
				</li>
			</ul>
		</div>
	)
}
export default NavbarMenu
