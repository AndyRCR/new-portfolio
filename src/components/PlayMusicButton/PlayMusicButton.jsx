import { AudioContext } from '../../context/AudioGlobalContext'
import play from '../../assets/images/icons/play_white.png'
import { useContext, useEffect } from 'react'
import GSAP from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
import './PlayMusicButton.css'

const PlayMusicButton = ({ audioIsPlaying, audioIsLoading, quitIntro }) => {
	const showPlayButton = () => {
		const playButton = document.querySelector(
			'.play-music-button-container'
		)
		const gsapAnimation = GSAP.to(playButton, {
			duration: 0.5,
			delay: 3.7,
			scale: 1,
		})
	}

	const setScrollTrigger = () => {
		GSAP.registerPlugin(ScrollTrigger)
		ScrollTrigger.matchMedia({
			'(max-width: 1000px)': () => {
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
				thirdMovieTimeLine.to('.play-music-button', {
					opacity: 0,
				})
			},
		})
	}

	useEffect(() => {
		if (quitIntro) {
			showPlayButton()
			setScrollTrigger()
		}
	}, [quitIntro])

	return (
		<div className='play-music-button'>
			<div className='play-music-button-container'>
				{audioIsLoading ? (
					<div className='loader'>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				) : audioIsPlaying ? (
					<div className='stop-button'></div>
				) : (
					<img src={play} alt='play button' />
				)}
			</div>
		</div>
	)
}
export default PlayMusicButton
