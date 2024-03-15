import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageGlobalContext'
import Button from '../Button/Button'
import RubberText from '../RubberText/RubberText'
import './HomeMainSection.css'
import useRedirection from '../../hooks/useRedirection'

const HomeMainSection = () => {
	const { language } = useContext(LanguageContext)

	const { handleRedirectionTo } = useRedirection()

	return (
		<section className='hero'>
			<div className='hero-wrapper'>
				<div className='hero-main'>
					<div className={`rubber-container ${language}`}>
						<RubberText>
							{language === 'en'
								? "Hi! I'm Andy Canales, Web Developer"
								: 'Hola! Soy Andy Canales, Desarrollador Web'}
						</RubberText>
					</div>
					<p className='hero-main-description'>
						{language === 'en'
							? 'Full Stack Developer / Software Developer'
							: 'Desarrollador Full Stack / Desarrollador de Software'}
					</p>
				</div>

				<div className='hero-second'>
					<Button onClick={() => handleRedirectionTo('/contact')}>
						{language === 'en' ? 'Contact me!' : 'Contáctame!'}
					</Button>
				</div>
			</div>

			<div className='lets-start'>
				<h2 className='lets-start-title'>
					{language === 'en' ? "Let's start!" : 'Empecemos!'}
				</h2>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					height='24'
					width='24'
					className='lets-start-icon'
				>
					<path
						fill='currentColor'
						d='M12 14.95q-.2 0-.375-.063-.175-.062-.325-.212L6.675 10.05q-.275-.275-.262-.688.012-.412.287-.687.275-.275.7-.275.425 0 .7.275l3.9 3.9 3.925-3.925q.275-.275.688-.263.412.013.687.288.275.275.275.7 0 .425-.275.7l-4.6 4.6q-.15.15-.325.212-.175.063-.375.063Z'
					></path>
				</svg>
			</div>
		</section>
	)
}
export default HomeMainSection
