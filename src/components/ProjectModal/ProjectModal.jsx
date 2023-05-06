import React, { useContext, useEffect } from 'react'
import { LanguageContext } from '../../context/LanguageGlobalContext'
import { ProjectContext } from '../../context/ProjectGlobalContext'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import GSAP from 'gsap'
import './ProjectModal.css'

const ProjectModal = () => {
	const { project, showModal, setShowModal } = useContext(ProjectContext)
	const { theme } = useContext(ThemeContext)
	const { language } = useContext(LanguageContext)

	const openModal = () => {
		GSAP.to('.project-modal', {
			duration: 0.5,
			opacity: 1,
			zIndex: 1000,
			ease: 'power3.out',
		})

		GSAP.to('.project-modal-container', {
			duration: 0.5,
			scale: 1,
			ease: 'power3.out',
		})
	}

	const closeModal = () => {
		GSAP.to('.project-modal-container', {
			duration: 0.5,
			scale: 0,
			ease: 'power3.out',
		})

		GSAP.to('.project-modal', {
			duration: 0.5,
			opacity: 0,
			zIndex: -1,
			ease: 'power3.out',
		})
	}

	useEffect(() => {
		if (showModal) {
			openModal()
		} else {
			closeModal()
		}
	}, [showModal])

	return (
		<div
			className={`project-modal ${theme}`}
			onClick={(e) => {
				if (e.target !== e.currentTarget) return
				setShowModal(false)
			}}
		>
			<div className='project-modal-container'>
				<div className='project-modal-close'>
					<svg
						onClick={() => setShowModal(false)}
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 96 960 960'
					>
						<path d='m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z' />
					</svg>
				</div>
				{project && (
					<React.Fragment>
						<div className='project-modal-header'>
							<div className='project-modal-title'>
								{project.name}
							</div>
						</div>
						<div className='project-modal-body'>
							<div className='project-modal-description'>
								<div className='project-modal-description-title'>
									{project.description[language].desc}
								</div>
								{project.description[language].features.length >
									0 && (
									<div className='project-modal-description-features'>
										<ul>
											{project.description[
												language
											].features.map((feature, index) => (
												<li
													key={`${
														project.name
													} feature-${index + 1}`}
												>
													{feature}
												</li>
											))}
										</ul>
									</div>
								)}
								{project.name.includes('Blink') && (
									<div className='project-credits'>
										{language === 'es'
											? 'Créditos especiales al equipo de diseño con el que desarrollé este proyecto: '
											: 'Special credits to the design team I developed this project with: '}
										<span className='link'>
											<a
												href='https://www.linkedin.com/in/flormolinas/'
												target='_blank'
												rel='noreferrer'
											>
												Florencia Molinas
											</a>
										</span>
										{language === 'es' ? ' y ' : ' and '}
										<span className='link'>
											<a
												href='https://www.linkedin.com/in/micaelaaprile/'
												target='_blank'
												rel='noreferrer'
											>
												Micaela Aprile
											</a>
										</span>
									</div>
								)}
							</div>
							<div className='project-modal-image-container'>
								{project.carousel
									.slice(1, project.carousel.length)
									.map((image, index) => (
										<img
											key={`image-${project.name}-${index}`}
											src={image}
											alt='project'
										/>
									))}
							</div>
						</div>
					</React.Fragment>
				)}
			</div>
		</div>
	)
}
export default ProjectModal
