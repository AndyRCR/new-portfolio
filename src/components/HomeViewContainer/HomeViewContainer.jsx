import { useContext } from 'react'
import Experience from '../Experience/Experience'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import './HomeViewContainer.css'
import Button from '../Button/Button'

const HomeViewContainer = () => {
	const { theme } = useContext(ThemeContext)

	return (
		<div className={`home-view-container ${theme}`}>
			<div className='experience'>
				<Experience />
			</div>

			<div className='page'>
				<div className='page-wrapper'>
					<section className='hero'>
						<div className='hero-wrapper'>
							<div className='hero-main'>
								<h1 className='hero-main-title'>
									Hi! I'm Andy Canales, Web Developer
								</h1>
								<p className='hero-main-description'>
									Full Stack Developer / Analyst Programer
								</p>
							</div>

							<div className='hero-second'>
								<Button>Contact me!</Button>
							</div>
						</div>
					</section>
					<div className='lets-start'>
						<h2 className='lets-start-title'>Let's start!</h2>
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
				</div>
			</div>
		</div>
	)
}

export default HomeViewContainer
