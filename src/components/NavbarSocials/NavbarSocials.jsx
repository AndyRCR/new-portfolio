import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faLinkedin,
	faGithub,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import './NavbarSocials.css'

const NavbarSocials = ({ theme }) => {
	return (
		<div className={`navbar-socials ${theme}`}>
			<ul className='navbar-socials-list'>
				<li className='navbar-socials-list-item'>
					<a
						href='https://www.linkedin.com/in/andycanalesr/'
						target='_blank'
						rel='noreferrer'
					>
						<FontAwesomeIcon
							className='navbar-icon'
							icon={faLinkedin}
						/>
					</a>
				</li>
				<li className='navbar-socials-list-item'>
					<a
						href='https://github.com/AndyRCR'
						target='_blank'
						rel='noreferrer'
					>
						<FontAwesomeIcon
							className='navbar-icon'
							icon={faGithub}
						/>
					</a>
				</li>
				<li className='navbar-socials-list-item'>
					<a
						href='https://twitter.com/RubenCanalesR'
						target='_blank'
						rel='noreferrer'
					>
						<FontAwesomeIcon
							className='navbar-icon'
							icon={faTwitter}
						/>
					</a>
				</li>
			</ul>
		</div>
	)
}
export default NavbarSocials
