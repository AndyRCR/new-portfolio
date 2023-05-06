import { createContext, useState } from 'react'
import { Howl } from 'howler'

export const AudioContext = createContext()

const AudioGlobalContext = ({ children }) => {
	const [audioIsLoading, setAudioIsLoading] = useState(false)
	const [audioIsPlaying, setAudioIsPlaying] = useState(false)
	const [audioLoaded, setAudioLoaded] = useState(false)
	const [sound, setSound] = useState(null)

	const handleAction = () => {
		if (audioIsLoading) return

		if (audioIsPlaying) {
			handleStop()
		} else {
			handlePlay()
		}
	}

	const handlePlay = () => {
		if (!audioLoaded) {
			setAudioIsLoading(true)
			const newSound = new Howl({
				src: [
					'https://a-canales.s3.us-east-2.amazonaws.com/audio/nocturne.mp3',
				],
				onplay: () => {
					setAudioIsLoading(false)
					setAudioIsPlaying(true)
				},
				onend: () => {
					setAudioIsPlaying(false)
				},
			})
			setSound(newSound)
			setAudioIsLoading(true)
			newSound.play()
		} else {
			sound.play()
			setAudioIsPlaying(true)
		}
	}

	const handleStop = () => {
		if (!sound) return
		sound.stop()
		setAudioIsPlaying(false)
	}

	return (
		<AudioContext.Provider
			value={{
				audioIsPlaying,
				setAudioIsPlaying,
				audioIsLoading,
				setAudioIsLoading,
				audioLoaded,
				setAudioLoaded,
				sound,
				setSound,
				handleAction,
				handlePlay,
				handleStop,
			}}
		>
			{children}
		</AudioContext.Provider>
	)
}

export default AudioGlobalContext
