import { useEffect } from 'react'
import './ContactForm.css'

const ContactForm = () => {
	const handleMouseIn = () => {
		const view = document.querySelector('.view')
		console.log(view)
	}

	// useEffect(() => {
	// 	const form = document.querySelector('.contactForm')
	// 	form.style.display = 'block'
	// })

	return (
		<div className='contactForm' onMouseEnter={handleMouseIn}>
			<h1>Contact Form</h1>
			<div className='scroll'>Scroll area</div>
		</div>
	)
}
export default ContactForm
