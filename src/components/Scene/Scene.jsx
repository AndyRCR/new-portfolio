import React, { useContext, useEffect, useRef, useState } from 'react'
import GSAP from 'gsap'
import * as DREI from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import { AudioContext } from '../../context/AudioGlobalContext'
import { ModelContext } from '../../context/ModelGlobalContext'
import { LanguageContext } from '../../context/LanguageGlobalContext'
import assets from '../../utils/assets'

/**
 * Scene components
 */
import Cat from '../Cat/Cat'
import AudioPopup from '../AudioPopup/AudioPopup'
import Room from '../Room/Room'
import Glass from '../Glass/Glass'
import Screen from '../Screen/Screen'
import Lights from '../Lights/Lights'
import PlayMusicMessage from '../PlayMusicMessage/PlayMusicMessage'
import PlayMusicButton from '../PlayMusicButton/PlayMusicButton'
import Circles from '../Circles/Circles'
import CatMessage from '../CatMessage/CatMessage'

/**
 * Utils
 */
import setScrollTrigger from '../../utils/scrollTrigger'
import fixButtons from '../../utils/fixButtons'
import fixScene from '../../utils/fixScene'
import initializeModel from '../../utils/initializeModel'

const Scene = (props) => {
	const { viewport } = useThree()
	const { theme, isDesktop } = useContext(ThemeContext)
	const { setModelLoaded, quitIntro } = useContext(ModelContext)
	const { language } = useContext(LanguageContext)
	const { audioIsPlaying, audioIsLoading } = useContext(AudioContext)

	const group = useRef()
	const ortCamera = useRef()
	const musicButton = useRef()
	const musicMessage = useRef()
	const catMessage = useRef()

	const model = DREI.useGLTF(assets.models.room)

	const [lerp, setLerp] = useState({
		current: -Math.PI / 4,
		target: -Math.PI / 4,
		ease: 0.1,
	})

	const lerpModel = (e) => {
		const rotation =
			((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth
		lerp.target = rotation * 0.1 - Math.PI / 4
	}

	useFrame(() => {
		if (group.current) {
			if (location.pathname === '/') {
				fixButtons()
			}

			if (isDesktop) {
				lerp.current = GSAP.utils.interpolate(
					lerp.current,
					lerp.target,
					lerp.ease
				)

				group.current.rotation.y = lerp.current
			}
		}
	})

	useEffect(() => {
		setScrollTrigger({
			group: group.current,
			ortCamera: ortCamera.current,
			musicButton: musicButton.current,
			musicMessage: musicMessage.current,
		})

		fixScene(setModelLoaded)

		window.addEventListener('mousemove', lerpModel)
		return () => window.removeEventListener('mousemove', lerpModel)
	}, [])

	useEffect(() => {
		if (group.current) {
			initializeModel(group.current, viewport.width, viewport.height)
		}
	}, [viewport.width, viewport.height])

	return (
		<group dispose={null}>
			<DREI.OrthographicCamera
				ref={ortCamera}
				makeDefault
				left={-2}
				right={2}
				top={2}
				bottom={-2}
				near={-50}
				far={50}
				zoom={250}
				rotation={[-Math.PI / 6, 0, 0]}
				position={[0, 2, 3]}
			/>
			<group name='Scene' rotation={[0, -Math.PI / 4, 0]} ref={group}>
				<Room nodes={model.nodes} />
				<Glass nodes={model.nodes} />
				<Screen nodes={model.nodes} />
				<Lights nodes={model.nodes} />
				<Circles theme={theme} />
				{isDesktop && <Cat />}

				<group ref={catMessage}>
					<DREI.Html
						rotation-y={Math.PI / 4}
						distanceFactor={1}
						position={[-1.55, 1, -1.25]}
						transform
						occlude
					>
						<CatMessage language={language} />
					</DREI.Html>
				</group>
				<group ref={musicMessage}>
					<DREI.Html
						rotation-y={Math.PI / 4}
						distanceFactor={3.5}
						position={[-0.2, 1.2, 1.2]}
						transform
						occlude
					>
						<PlayMusicMessage
							audioIsPlaying={audioIsPlaying}
							language={language}
							quitIntro={quitIntro}
						/>
					</DREI.Html>
				</group>
				<group ref={musicButton}>
					<DREI.Html
						rotation-y={Math.PI / 4}
						distanceFactor={3.5}
						position={[-0.2, 0.7, 1.8]}
						transform
						occlude
					>
						<PlayMusicButton
							audioIsPlaying={audioIsPlaying}
							audioIsLoading={audioIsLoading}
							quitIntro={quitIntro}
						/>
					</DREI.Html>
				</group>
			</group>
		</group>
	)
}

DREI.useGLTF.preload(assets.models.room)

export default Scene
