import { useContext, useEffect } from 'react'
import { gsap } from 'gsap'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import './PlayMusicMessage.css'

const PlayMusicMessage = ({ theme, isPlaying }) => {
	const showPlayMessage = () => {
		const playMessage = document.querySelector('.playMusicContainer')
		gsap.to(playMessage, {
			duration: 0.5,
			delay: 0.5,
			scale: 1,
		})
	}

	useEffect(() => {
		showPlayMessage()
	}, [])

	return (
		<div className={`playMusic ${theme}`}>
			<div className='playMusicContainer'>
				{isPlaying
					? 'F. Chopin - Nocturne Op9 No2'
					: '¿Te toco una canción? ♫'}
			</div>
		</div>
	)
}

export default PlayMusicMessage
