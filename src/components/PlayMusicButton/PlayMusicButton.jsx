import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import play from '../../assets/images/play_white.png'
import nocturne from '../../assets/audio/nocturne.mp3'
import { Howl } from 'howler'
import './PlayMusicButton.css'

const PlayMusicButton = () => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [loaded, setLoaded] = useState(false)
	const [sound, setSound] = useState(null)

	const handlePlay = () => {
		if (!loaded) {
			const newSound = new Howl({
				src: [nocturne],
				onplay: () => {
					setIsPlaying(true)
				},
				onend: () => {
					setIsPlaying(false)
				},
			})
			setSound(newSound)
			setLoaded(true)
			newSound.play()
		} else {
			sound.play()
			setIsPlaying(true)
		}
	}

	const handleStop = () => {
		if (!sound) return
		sound.stop()
		setIsPlaying(false)
	}

	useEffect(() => {
		return () => {
			if (sound) {
				sound.unload()
			}
		}
	}, [sound])

	return (
		<div className='playMusicButton'>
			<div
				onClick={isPlaying ? handleStop : handlePlay}
				className='playMusicButtonContainer'
			>
				{isPlaying ? (
					<div className='stopButton'></div>
				) : (
					<img src={play} alt='play button' />
				)}
			</div>
		</div>
	)
}
export default PlayMusicButton
