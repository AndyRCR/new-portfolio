import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import './NavbarMenu.css'

const NavbarMenu = ({ theme }) => {
	return (
		<div className={`navbar-menu ${theme}`}>
			<ul className='navbar-menu-list'>
				<li className='navbar-menu-list-item'>About me</li>
				<li className='navbar-menu-list-item'>Skills</li>
				<li className='navbar-menu-list-item'>Projects</li>
				<li className='navbar-menu-list-item'>Contact</li>
			</ul>
		</div>
	)
}
export default NavbarMenu
