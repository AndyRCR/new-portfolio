import React, { useRef, useState } from 'react'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageGlobalContext'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import Slider from 'react-slick'
import projects from '../ProjectsViewContainer/Projects'
import './ProjectSlider.css'

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
