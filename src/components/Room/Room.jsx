import React, { useContext, useEffect, useRef, useState } from 'react'
import {
	MathUtils,
	MeshBasicMaterial,
	TextureLoader,
	ShaderMaterial,
} from 'three'
import assets from '../../utils/assets'
import gsap from 'gsap'
import { ThemeContext } from '../../context/ThemeGlobalContext'

import bakedday from '../../assets/images/bakedday.jpg'
import bakednight from '../../assets/images/bakednight.jpg'

import bakedVertexShader from '../../shaders/baked/vertex.glsl'
import bakedFragmentShader from '../../shaders/baked/fragment.glsl'
import { extend, useFrame } from '@react-three/fiber'

const textureLoader = new TextureLoader()

const Room = ({ nodes }) => {
	const { theme, setTheme } = useContext(ThemeContext)

	const room = useRef()
	const animation = useRef()

	const updateUniform = () => {
		animation.current?.kill()

		animation.current = gsap.to(room.current.material.uniforms.uNightMix, {
			duration: 0.3,
			value: theme === 'light' ? 0 : 10,
			onInterrupt: () => setTheme(theme === 'light' ? 'dark' : 'light'),
		})
	}

	useEffect(() => {
		updateUniform()
	}, [theme])

	return (
		<React.Fragment>
			<directionalLight
				color={'#ffffff'}
				position={[-1, 5, -3.5]}
				intensity={1.5}
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
				castShadow
			/>
			<mesh
				name='room'
				ref={room}
				geometry={nodes.room.geometry}
				material={assets.textures.bakedTexture}
				position={[0.79, 0.82, -1.41]}
				rotation={[0, 1.57, 0]}
			/>
			<mesh
				name='piso'
				geometry={nodes.piso.geometry}
				material={assets.textures.floorTexture}
				position={[0.08, 0, 0.08]}
				rotation={[Math.PI, 0, Math.PI]}
				castShadow
			/>
			<mesh
				name='cortinon'
				geometry={nodes.cortinon.geometry}
				material={assets.textures.curtainTexture}
				position={[-1.71, 1.55, 0.09]}
				rotation={[0, 0, -1.52]}
			/>
		</React.Fragment>
	)
}
export default Room
