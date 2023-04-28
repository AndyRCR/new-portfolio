import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import './ContactViewContainer.css'
import Experience from '../Experience/Experience'

const ContactViewContainer = () => {
	const { theme } = useContext(ThemeContext)

	return (
		<div className={`contact-view-container ${theme}`}>
			<div className='experience'>
				<Experience />
			</div>
		</div>
	)
}
export default ContactViewContainer
