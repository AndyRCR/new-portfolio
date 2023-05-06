import React, { useState, useRef, useEffect, useContext } from 'react'
import Slider from 'react-slick'
import { ProjectContext } from '../../context/ProjectGlobalContext'
import './Project.css'

const settings = {
	dots: false,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	autoplay: false,
	cssEase: 'linear',
	pauseOnHover: false,
	arrows: false,
	draggable: false,
}

const Project = ({ project }) => {
	const { setShowModal, setProject } = useContext(ProjectContext)

	const [autoplay, setAutoplay] = useState(false)
	const [autoplaySpeed, setAutoplaySpeed] = useState(1500)
	const sliderRef = useRef(null)

	const handleProject = (e) => {
		setProject(project)
		setShowModal(true)
	}

	const handleMouseEnter = () => {
		sliderRef.current.slickGoTo(1)
		setAutoplay(true)
	}

	const handleMouseLeave = () => {
		setAutoplay(false)
		sliderRef.current.slickGoTo(0)
	}

	useEffect(() => {
		if (!autoplay) {
			return
		}

		const timer = setInterval(() => {
			sliderRef.current.slickNext()
		}, autoplaySpeed)

		return () => {
			clearInterval(timer)
		}
	}, [autoplay, autoplaySpeed])

	return (
		<div
			className='project-carousel-container'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={(e) => handleProject(e)}
		>
			<Slider ref={sliderRef} {...settings}>
				{project.carousel.map((image, index) => (
					<div
						key={`project-image-${index}`}
						className='project-image-container'
					>
						<img src={image} alt={project.name} />
					</div>
				))}
			</Slider>
		</div>
	)
}
export default Project
