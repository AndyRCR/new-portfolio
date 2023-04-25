import { AudioContext } from '../../context/AudioGlobalContext'
import play from '../../assets/images/icons/play_white.png'
import { useContext, useEffect } from 'react'
import { gsap } from 'gsap'
import './PlayMusicButton.css'

const PlayMusicButton = (props) => {
	const { audioIsPlaying, audioIsLoading } = props

	const showPlayButton = () => {
		const playButton = document.querySelector(
			'.play-music-button-container'
		)
		const gsapAnimation = gsap.to(playButton, {
			duration: 0.5,
			delay: 1,
			scale: 1,
		})
	}

	useEffect(() => {
		showPlayButton()
	}, [])

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
