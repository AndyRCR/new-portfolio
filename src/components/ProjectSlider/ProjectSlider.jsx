import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import foxbel from '../../assets/images/projects/foxbel.jpg'
import weather from '../../assets/images/projects/weather.jpg'
import untels from '../../assets/images/projects/untels.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import './ProjectSlider.css'

const projects = [
	{
		name: 'Blink - Admin Panel',
		image: foxbel,
		description: '',
		tecnologies:
			'React, Node, Express, MySQL, AWS RDS, AWS LightSail, React-PDF, Framer-motion, Material-UI',
	},
	{
		name: 'Blink - Landing Page',
		image: foxbel,
		description: '',
		tecnologies: 'React, Node, Express, AWS S3, Material-UI, Framer-motion',
	},
	{
		name: 'My Portfolio',
		image: foxbel,
		description: '',
		tecnologies: 'React, Three.js, React-slick, Blast, EmailJS',
	},
	{
		name: 'BCP Clone',
		image: foxbel,
		description: '',
		tecnologies: 'React, React-slick, Lottie',
	},
	{
		name: 'Foxbel Music Player',
		image: foxbel,
		description: '',
		tecnologies: 'React, Material-UI, Deezer API',
	},
	{
		name: 'Weather App',
		image: weather,
		description: '',
		tecnologies:
			'React, Cloud Firestore, Styled-components, Charts Ant Design',
	},
	{
		name: 'Untels Landing Page',
		image: untels,
		description: '',
		tecnologies:
			'React, Three.js, AWS S3, Cloud Firestore, EmailJS, Blender, Autocad',
	},
]

const ProjectSlider = () => {
	const { theme } = useContext(ThemeContext)
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
		pauseOnHover: false,
		autoplaySpeed: 8000,
		beforeChange: (oldIndex, newIndex) => setSlideIndex(newIndex),
		afterChange: (index) => setSlideIndex(index),
	}

	const seleccionarSlide = (number) => {
		setSlideIndex(number)
		slider?.current?.slickGoTo(number)
	}

	return (
		<React.Fragment>
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
							<img
								src={project.image}
								alt={`${project.name} andy canales`}
							/>
							<div className='project-info'>
								<h3>{project.name}</h3>
								<p>{project.description}</p>
								<p>Used technologies: {project.tecnologies}</p>
							</div>
						</div>
					))}
				</Slider>
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
		</React.Fragment>
	)
}
export default ProjectSlider
