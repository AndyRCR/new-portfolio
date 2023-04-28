import { useContext, useEffect, useRef } from 'react'
import GSAP from 'gsap'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import './PlayMusicMessage.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

const PlayMusicMessage = ({ audioIsPlaying }) => {
	const pick = useRef()

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
						trigger: '.first-move',
						start: 'top top',
						end: 'bottom bottom',
						scrub: 0.6,
						invalidateOnRefresh: true,
					},
				})
				firstMovieTimeLine.to('.play-music-pick', { left: 10 })

				//Second Section
				const secondMovieTimeLine = new GSAP.timeline({
					scrollTrigger: {
						scroller: '.page-wrapper',
						trigger: '.second-move',
						start: 'top top',
						end: 'bottom bottom',
						scrub: 0.6,
						invalidateOnRefresh: true,
					},
				})
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
				<div ref={pick} className='play-music-pick'></div>
			</div>
		</div>
	)
}

export default PlayMusicMessage
