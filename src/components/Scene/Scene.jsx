import React, { useContext, useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, Html } from '@react-three/drei'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import { AudioContext } from '../../context/AudioGlobalContext'

import AudioPopup from '../AudioPopup/AudioPopup'
import Room from '../Room/Room'
import Glass from '../Glass/Glass'
import Screen from '../Screen/Screen'
import Lights from '../Lights/Lights'
import assets from '../../utils/assets'
import { useFrame } from '@react-three/fiber'

const filterAnimations = (animations) => {
	return Object.entries(animations)
		.filter(([name, action]) => name.includes('Aro'))
		.map(([_, action]) => action)
}

const Scene = (props) => {
	const group = useRef()

	const { theme } = useContext(ThemeContext)

	const { nodes, materials, animations } = useGLTF(assets.models.room)
	const { actions } = useAnimations(animations, group)

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

	const initializingModel = () => {
		const rgbAnimations = filterAnimations(actions)
		rgbAnimations.forEach((animation) => animation.play())
	}

	useFrame(() => {
		lerp.current = gsap.utils.interpolate(
			lerp.current,
			lerp.target,
			lerp.ease
		)

		group.current.rotation.y = lerp.current
	})

	useEffect(() => {
		if (group.current) {
			initializingModel()
		}

		window.addEventListener('mousemove', lerpModel)

		return () => window.removeEventListener('mousemove', lerpModel)
	}, [])

	return (
		<group
			name='Scene'
			scale={[0.5, 0.5, 0.5]}
			// position={[1.5, 0, 1]}
			rotation={[0, -Math.PI / 4, 0]}
			position={[1.9, 0, 0]}
			ref={group}
			dispose={null}
			{...props}
		>
			<AudioPopup />
			<Room nodes={nodes} />
			<Glass nodes={nodes} />
			<Screen nodes={nodes} />
			<Lights nodes={nodes} />
		</group>
	)
}

useGLTF.preload(assets.models.room)

export default Scene
