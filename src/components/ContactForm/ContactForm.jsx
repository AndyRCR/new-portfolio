import { useEffect, useRef, useState } from 'react'
import Lottie from 'lottie-react'
import lottiecat from '../../assets/lotties/cat.json'
import useMail from '../../hooks/useMail'
import './ContactForm.css'

const ContactForm = ({ display, theme, language }) => {
	const [timerId, setTimerId] = useState(null)
	const lottieRef = useRef(null)

	const { mail, setMail, sendMail, isLoading } = useMail(language)

	/**
	 * General handlers
	 */
	const handleFocus = () => {
		if (timerId) {
			clearTimeout(timerId)
			setTimerId(null)
			return
		}

		if (lottieRef.current.animationItem.currentFrame >= 35) return
		lottieRef.current.setDirection(1)
		lottieRef.current.playSegments([11, 47], true)
	}

	const handleInputBlur = () => {
		lottieRef.current.setDirection(-1)
		if (lottieRef.current.animationItem.currentFrame >= 35) {
			lottieRef.current.playSegments([47, 11], true)
		}
	}

	const handleBlur = () => {
		const id = setTimeout(() => {
			setTimerId(null)
			handleInputBlur()
		}, 100)
		setTimerId(id)
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setMail({ ...mail, [name]: value })
	}

	/**
	 * Window handler
	 */

	const handleResize = () => {
		if (window.innerWidth >= 950) {
			document.querySelector('.contact-form-container').style.width =
				'95%'
		} else if (window.innerWidth >= 500) {
			document.querySelector('.contact-form-container').style.width = `${
				window.innerWidth - 270
			}px`
		} else {
			document.querySelector('.contact-form-container').style.width = `${
				window.innerWidth - 70
			}px`
		}
	}

	useEffect(() => {
		if (lottieRef.current) {
			lottieRef.current.setSpeed(2)
			lottieRef.current.stop()
		}

		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [lottieRef])

	return (
		<div className={`contact-form ${theme}`} style={{ display }}>
			<Lottie
				className='lottie-cat'
				lottieRef={lottieRef}
				loop={false}
				autoPlay={false}
				animationData={lottiecat}
			/>

			<div className='contact-form-container'>
				<h2>{language === 'en' ? 'Contact me!' : 'Contáctame!'}</h2>
				<p>
					{language === 'en'
						? `I'm interested in freelance opportunities of any kind, as well as job offers.
						However, if you have any other request or question, feel free to use the form.
						You can also reach me through my email: `
						: `Estoy interesado tanto en oportunidades de freelance como en ofertas de trabajo.
						Sin embargo, si tiene alguna otra solicitud o pregunta, no dude en utilizar el formulario.
						También se pueden comunicar conmigo a través de mi correo electrónico: `}
					<span className='link'>
						<a
							href='mailto:andycr321@gmail.com'
							target='_blank'
							referrerPolicy='no-referrer'
						>
							andycr321@gmail.com
						</a>
					</span>
				</p>
				<div className='contact-form-body'>
					<div className='form-line'>
						<div className='form-item'>
							<label>
								{language === 'en' ? 'Name' : 'Nombre'}
							</label>
							<input
								onFocus={handleFocus}
								onBlur={handleBlur}
								onChange={handleChange}
								value={mail.name}
								autoComplete='off'
								type='text'
								name='name'
								id='name'
							/>
						</div>

						<div className='form-item'>
							<label>
								{language === 'en' ? 'Email' : 'Correo'}
							</label>
							<input
								onFocus={handleFocus}
								onBlur={handleBlur}
								onChange={handleChange}
								value={mail.email}
								autoComplete='off'
								type='email'
								name='email'
								id='name'
							/>
						</div>
					</div>

					<div className='form-line'>
						<div className='form-item'>
							<label>
								{language === 'en' ? 'Subject' : 'Asunto'}
							</label>
							<input
								onFocus={handleFocus}
								onBlur={handleBlur}
								onChange={handleChange}
								value={mail.subject}
								autoComplete='off'
								type='text'
								name='subject'
								id='name'
							/>
						</div>
					</div>

					<div className='form-line'>
						<div className='form-item'>
							<label>
								{language === 'en' ? 'Message' : 'Mensaje'}
							</label>
							<input
								onFocus={handleFocus}
								onBlur={handleBlur}
								onChange={handleChange}
								value={mail.message}
								autoComplete='off'
								type='text'
								name='message'
								id='name'
							/>
						</div>
					</div>

					<div className='button-container'>
						<button
							onClick={() => !isLoading && sendMail()}
							className={`button button-main ${theme}`}
						></button>
						<div className='button-text'>
							{isLoading ? (
								<div className='loader'>
									<div></div>
									<div></div>
									<div></div>
									<div></div>
								</div>
							) : language === 'en' ? (
								'Send'
							) : (
								'Enviar'
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default ContactForm
