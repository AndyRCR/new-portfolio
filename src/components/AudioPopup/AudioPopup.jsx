import { Html } from '@react-three/drei'
import React, { useContext } from 'react'
import { AudioContext } from '../../context/AudioGlobalContext'
import PlayMusicMessage from '../PlayMusicMessage/PlayMusicMessage'
import PlayMusicButton from '../PlayMusicButton/PlayMusicButton'
import { LanguageContext } from '../../context/LanguageGlobalContext'
import { ModelContext } from '../../context/ModelGlobalContext'

const AudioPopup = () => {
	const { audioIsPlaying, audioIsLoading, handleStop, handlePlay } =
		useContext(AudioContext)

	const { quitIntro } = useContext(ModelContext)
	const { language } = useContext(LanguageContext)

	const audioProps = {
		audioIsPlaying,
		audioIsLoading,
		handleStop,
		handlePlay,
	}

	return (
		<>
			<Html
				rotation-y={Math.PI / 4}
				distanceFactor={3.5}
				position={[-0.2, 1.2, 1.2]}
				transform
				occlude
			>
				<PlayMusicMessage
					audioIsPlaying={audioIsPlaying}
					language={language}
				/>
			</Html>
			<Html
				rotation-y={Math.PI / 4}
				distanceFactor={3.5}
				position={[-0.2, 0.7, 1.8]}
				transform
				occlude
			>
				<PlayMusicButton {...audioProps} />
			</Html>
		</>
	)
}
export default AudioPopup
