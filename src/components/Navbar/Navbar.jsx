import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='navbar-container'>
				<div className='navbar-logo'>
					<Link to={'/'}>Logo</Link>
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
