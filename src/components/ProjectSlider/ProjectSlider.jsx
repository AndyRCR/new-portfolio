import React, { useRef, useState } from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageGlobalContext'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import Slider from 'react-slick'
import foxbel from '../../assets/images/projects/foxbel.jpg'
import weather from '../../assets/images/projects/weather.jpg'
import untels from '../../assets/images/projects/untels.png'
import blinklp from '../../assets/images/projects/blink-lp.jpg'
import blinkcrm from '../../assets/images/projects/blink-crm.jpg'
import portfolio from '../../assets/images/projects/portfolio.jpg'
import peko from '../../assets/images/projects/peko.jpg'
import bcpclone from '../../assets/images/projects/bcpclone.jpg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ProjectSlider.css'

const projects = [
	{
		name: 'Blink - Admin Panel',
		image: blinkcrm,
		tecnologies:
			'React, Node, Express, MySQL, AWS RDS, AWS LightSail, React-PDF, Framer-motion, Material-UI',
		description: {
			en: '',
			es: '',
		},
	},
	{
		name: 'Blink - Landing Page',
		image: blinklp,
		tecnologies: 'React, Node, Express, AWS S3, Material-UI, Framer-motion',
		description: {
			en: '',
			es: '',
		},
	},
	{
		name: 'BCP Clone',
		image: bcpclone,
		tecnologies: 'React, React-slick, Lottie',
		description: {
			en: '',
			es: '',
		},
	},
	{
		name: 'Old Portfolio',
		image: portfolio,
		tecnologies: 'React, Three.js, React-slick, Blast, EmailJS',
		description: {
			en: '',
			es: '',
		},
	},
	{
		name: 'Foxbel Music Player',
		image: foxbel,
		tecnologies: 'React, Howler, Material-UI, Deezer API',
		description: {
			en: '',
			es: '',
		},
	},
	{
		name: 'Weather App',
		image: weather,
		tecnologies:
			'React, Three.js, Vanta, Cloud Firestore, Styled-components, Charts Ant Design',
		description: {
			en: '',
			es: '',
		},
	},
	{
		name: 'Untels Landing Page',
		image: untels,
		tecnologies:
			'React, Three.js, AWS S3, Cloud Firestore, EmailJS, Blender, Autocad',
		description: {
			en: '',
			es: '',
		},
	},
	{
		name: 'Peko Cinema',
		image: peko,
		tecnologies: 'React, AWS S3, Cloud Firestore, EmailJS',
		description: {
			en: '',
			es: '',
		},
	},
]

const ProjectSlider = () => {
	const { theme } = useContext(ThemeContext)
	const { language } = useContext(LanguageContext)
	const slider = useRef(null)
	const [slideIndex, setSlideIndex] = useState(0)

	const settings = {
		dots: false,
		infinite: true,
		arrows: false,
		lazyLoad: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1200,
		pauseOnHover: true,
		autoplaySpeed: 4000,
		beforeChange: (oldIndex, newIndex) => setSlideIndex(newIndex),
		afterChange: (index) => setSlideIndex(index),
	}

	const seleccionarSlide = (number) => {
		setSlideIndex(number)
		slider?.current?.slickGoTo(number)
	}

	return (
		<div className='project-slider-container'>
			<div className={`project-slider ${theme}`}>
				<Slider
					onSwipe={() =>
						setSlideIndex(slideIndex >= 2 ? 0 : slideIndex + 1)
					}
					ref={slider}
					{...settings}
				>
					{projects.map((project, index) => (
						<div key={`slider${index + 1}`} className='slide'>
							<div className='slider-images'>
								<img
									src={project.image}
									alt={`${project.name} andy canales`}
								/>
								<div className='project-info'>
									<h3>{project.name}</h3>
									<p>
										<strong>
											{language === 'en'
												? 'Used technologies: '
												: 'Tecnologías usadas: '}
										</strong>
										{project.tecnologies}
									</p>
								</div>
							</div>
						</div>
					))}
				</Slider>
				<div className='paginacion'>
					{projects.map((project, index) => {
						return (
							<div
								key={`paginacion-item${index + 1}`}
								onClick={() => seleccionarSlide(index)}
								className={
									slideIndex === index
										? 'paginacion-item active'
										: 'paginacion-item'
								}
							></div>
						)
					})}
				</div>
			</div>
			<div className='controls'>
				<div className='controls-next-prev'>
					<div
						onClick={() => slider?.current?.slickPrev()}
						className='control-atras'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							height='48'
							viewBox='0 96 960 960'
							width='48'
						>
							<path d='M561 840 296 575l265-265 67 67-198 198 198 198-67 67Z' />
						</svg>
					</div>
					<div
						onClick={() => slider?.current?.slickNext()}
						className='control-siguiente'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							height='48'
							viewBox='0 96 960 960'
							width='48'
						>
							<path d='M561 840 296 575l265-265 67 67-198 198 198 198-67 67Z' />
						</svg>
					</div>
				</div>
			</div>
		</div>
	)
}
export default ProjectSlider
