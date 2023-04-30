import { useContext, useRef } from 'react'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import { AudioContext } from '../../context/AudioGlobalContext'
import { ModelContext } from '../../context/ModelGlobalContext'
import Experience from '../Experience/Experience'
import HomeMainSection from '../HomeMainSection/HomeMainSection'
import HomeAboutSection from '../HomeAboutSection/HomeAboutSection'
import HomeSkillsSection from '../HomeSkillsSection/HomeSkillsSection'
import HomeProjectsSection from '../HomeProjectsSection/HomeProjectsSection'
import './HomeViewContainer.css'

const HomeViewContainer = () => {
	const { theme } = useContext(ThemeContext)
	const { modelLoaded } = useContext(ModelContext)
	const { handleStop, handlePlay, audioIsPlaying } = useContext(AudioContext)

	const bgRef = useRef(null)

	const handleMouseEnterButton = () => {
		if (modelLoaded) {
			const button = document.querySelector(
				'.play-music-button-container'
			)
			button.style.scale = '1.2'
		}
	}

	const handleMouseLeaveButton = () => {
		if (modelLoaded) {
			const button = document.querySelector(
				'.play-music-button-container'
			)
			button.style.scale = '1'
		}
	}

	const handleMouseDownButton = () => {
		if (modelLoaded) {
			const button = document.querySelector(
				'.play-music-button-container'
			)
			button.style.scale = '1'
		}
	}

	const handleMouseUpButton = () => {
		if (modelLoaded) {
			const button = document.querySelector(
				'.play-music-button-container'
			)
			button.style.scale = '1.2'
		}
	}

	return (
		<div className={`home-view-container ${theme}`} ref={bgRef}>
			<div className='experience'>
				<Experience />
			</div>

			<div
				className='fix-button'
				onClick={audioIsPlaying ? handleStop : handlePlay}
				onMouseEnter={handleMouseEnterButton}
				onMouseLeave={handleMouseLeaveButton}
				onMouseDown={handleMouseDownButton}
				onMouseUp={handleMouseUpButton}
			></div>

			<div className='page'>
				<div className='page-wrapper'>
					<HomeMainSection />

					<div className='first-move section-margin'></div>

					<HomeAboutSection />

					<div className='second-move section-margin'></div>

					<HomeSkillsSection />

					<div className='third-move section-margin'></div>

					<HomeProjectsSection />
				</div>
			</div>
		</div>
	)
}

export default HomeViewContainer
