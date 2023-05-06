import React, { useContext, useEffect, useRef, useState } from 'react'
import {
	useGLTF,
	useAnimations,
	Html,
	PerspectiveCamera,
	OrthographicCamera,
	EnvironmentPortal,
	OrbitControls,
} from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import assets from '../../utils/assets'

import ScreenRoom from '../Room/ScreenRoom'
import ScreenGlass from '../Glass/ScreenGlass'
import ScreenLights from '../Lights/ScreenLights'
import ScreenForm from '../Screen/ScreenForm'
import { ModelContext } from '../../context/ModelGlobalContext'

const filterAnimations = (animations) => {
	return Object.entries(animations)
		.filter(([name, action]) => name.includes('Aro'))
		.map(([_, action]) => action)
}

const Scene = (props) => {
	const { viewport } = useThree()
	const { theme, isDesktop } = useContext(ThemeContext)
	const { modelLoaded, setModelLoaded } = useContext(ModelContext)

	const perspCamera = useRef()
	const group = useRef()
	const { animations, nodes } = useGLTF(assets.models.screenmodel)
	const { actions } = useAnimations(animations, group)

	const [lerp, setLerp] = useState({
		current: -Math.PI / 4,
		target: -Math.PI / 4,
		ease: 0.1,
	})

	const lerpCamera = (e) => {
		const x = e.clientX
		const rotation = ((x - window.innerWidth / 2) * 2) / window.innerWidth
		perspCamera.current.rotation.y = rotation * -0.025
	}

	const playAnimations = () => {
		const rgbAnimations = filterAnimations(actions)
		rgbAnimations.forEach((animation) => animation.play())
	}

	const initializingModel = () => {
		const { x, y, z } = group.current.position
		perspCamera.current.position.set(x - 1.2, y + 1.3, z - 0.8)
		setModelLoaded(true)
	}

	useEffect(() => {
		if (group.current) {
			playAnimations()
			isDesktop && window.addEventListener('mousemove', lerpCamera)
		}
		return () => {
			isDesktop && window.removeEventListener('mousemove', lerpCamera)
		}
	}, [])

	useEffect(() => {
		if (group.current) {
			initializingModel()
		}
	}, [viewport.width, viewport.height])

	return (
		<group dispose={null}>
			<PerspectiveCamera
				ref={perspCamera}
				makeDefault
				resolution={[window.innerWidth, window.innerHeight]}
				near={0.1}
				far={1000}
				fov={75}
				position={[0, 0, 5]}
				rotation={[-Math.PI / 16, 0, 0]}
			/>
			<group ref={group} name='screenScene'>
				<ScreenRoom nodes={nodes} />
				<ScreenGlass nodes={nodes} />
				<ScreenForm nodes={nodes} />
				<ScreenLights nodes={nodes} />
			</group>
		</group>
	)
}

useGLTF.preload(assets.models.screenmodel)

export default Scene
