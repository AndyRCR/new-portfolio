import { useContext, useEffect } from 'react'
import GSAP from 'gsap'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
import './PlayMusicMessage.css'

const PlayMusicMessage = ({ audioIsPlaying }) => {
	const showPlayMessage = () => {
		const playMessage = document.querySelector(
			'.play-music-message-container'
		)
		GSAP.to(playMessage, {
			duration: 0.5,
			delay: 0.5,
			scale: 1,
		})
	}

	const setScrollTrigger = () => {
		GSAP.registerPlugin(ScrollTrigger)
		ScrollTrigger.matchMedia({
			'(max-width: 1000px)': () => {
				//First Section
				const firstMovieTimeLine = new GSAP.timeline({
					scrollTrigger: {
						scroller: '.page-wrapper',
						trigger: '.second-move',
						start: 'top top',
						end: 'bottom bottom',
						scrub: 0.6,
						invalidateOnRefresh: true,
					},
				})
				firstMovieTimeLine.to('.play-music-pick', { left: 10 })

				//Third Section
				const thirdMovieTimeLine = new GSAP.timeline({
					scrollTrigger: {
						scroller: '.page-wrapper',
						trigger: '.third-move',
						start: 'top top',
						end: `bottom bottom`,
						scrub: 0.6,
						invalidateOnRefresh: true,
					},
				})
				thirdMovieTimeLine.to('.play-music-message', { opacity: 0 })
			},
		})
	}

	useEffect(() => {
		showPlayMessage()
		setScrollTrigger()
	}, [])

	return (
		<div className='play-music-message'>
			<div className='play-music-message-container'>
				{audioIsPlaying
					? 'F. Chopin - Nocturne Op9 No2 ♫'
					: 'I play you a song? 😁'}
				<div className='play-music-pick'></div>
			</div>
		</div>
	)
}

export default PlayMusicMessage
