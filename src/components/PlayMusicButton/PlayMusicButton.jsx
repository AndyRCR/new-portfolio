import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import play from '../../assets/images/play_white.png'
import nocturne from '../../assets/audio/nocturne.mp3'
import { Howl } from 'howler'
import './PlayMusicButton.css'

const PlayMusicButton = ({ isPlaying, setIsPlaying }) => {
	const [isLoading, setIsLoading] = useState(false)
	const [loaded, setLoaded] = useState(false)
	const [sound, setSound] = useState(null)

	const handleAction = () => {
		if (isLoading) return

		if (isPlaying) {
			handleStop()
		} else {
			handlePlay()
		}
	}

	const handlePlay = () => {
		if (!loaded) {
			setIsLoading(true)
			const newSound = new Howl({
				src: [nocturne],
				onplay: () => {
					setIsLoading(false)
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
				{isLoading ? (
					<div className='loader'>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				) : isPlaying ? (
					<div className='stopButton'></div>
				) : (
					<img src={play} alt='play button' />
				)}
			</div>
		</div>
	)
}
export default PlayMusicButton
