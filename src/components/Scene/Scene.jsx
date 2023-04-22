import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

import Room from '../Room/Room'
import Glass from '../Glass/Glass'
import Screen from '../Screen/Screen'
import Lights from '../Lights/Lights'
import assets from '../../utils/assets'

const filterAnimations = (animations) => {
	return Object.entries(animations)
		.filter(([name, action]) => name.includes('Aro'))
		.map(([_, action]) => action)
}

const Scene = (props) => {
	const group = useRef()

	const { nodes, materials, animations } = useGLTF(assets.models.room)
	const { actions } = useAnimations(animations, group)

	const lerpModel = (e) => {
		const x = e.clientX
		const xRotation = (x / window.innerWidth) * 2 - 1
		group.current.rotation.y = THREE.MathUtils.lerp(
			group.current.rotation.y,
			xRotation / 10 - Math.PI / 4,
			0.1
		)
	}

	const initializingModel = () => {
		group.current.rotation.y = -Math.PI / 4

		group.current.traverse((child) => {
			if (child.isMesh) child.geometry.computeVertexNormals()
		})

		const rgbAnimations = filterAnimations(actions)
		rgbAnimations.forEach((animation) => animation.play())
	}

	useEffect(() => {
		initializingModel()

		window.addEventListener('mousemove', lerpModel)

		return () => window.removeEventListener('mousemove', lerpModel)
	}, [])

	return (
		<group
			name='Scene'
			scale={[0.5, 0.5, 0.5]}
			// position={[1.5, 0, 1]}
			position={[0, 0, 1]}
			ref={group}
			dispose={null}
			{...props}
		>
			<Room nodes={nodes} />
			<Glass nodes={nodes} />
			<Screen nodes={nodes} />
			<Lights nodes={nodes} />
		</group>
	)
}

useGLTF.preload(assets.models.room)

export default Scene
