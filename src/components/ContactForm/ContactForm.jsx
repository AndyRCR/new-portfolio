import { useEffect } from 'react'
import './ContactForm.css'

const ContactForm = ({ display }) => {
	const handleMouseIn = () => {
		const view = document.querySelector('.view')
		// console.log(view)
	}

	return (
		<div
			className='contactForm'
			onMouseEnter={handleMouseIn}
			style={{ display }}
		>
			<h1>Contact Form</h1>

			<div className='form-item'>
				<label htmlFor='name'>Gaaaa</label>
				<input type='text' name='name' id='name' />
			</div>
		</div>
	)
}
export default ContactForm
