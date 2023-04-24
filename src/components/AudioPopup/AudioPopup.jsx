import { Html } from '@react-three/drei'
import React, { useContext } from 'react'
import { AudioContext } from '../../context/AudioGlobalContext'
import PlayMusicMessage from '../PlayMusicMessage/PlayMusicMessage'
import PlayMusicButton from '../PlayMusicButton/PlayMusicButton'

const AudioPopup = () => {
	const { audioIsPlaying, audioIsLoading, handleStop, handlePlay } =
		useContext(AudioContext)

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
				<PlayMusicMessage audioIsPlaying={audioIsPlaying} />
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
