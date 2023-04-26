import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Html, Plane } from '@react-three/drei'
import { useContext, useEffect, useRef, useState } from 'react'
import { gsap, Power0 } from 'gsap'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import Scene from '../Scene/Scene'
import CameraPath from '../CameraPath/CameraPath'
import './Experience.css'
import { CameraContext } from '../../context/CameraGlobalContext'

const renderer = {
	antialias: true,
	toneMapping: THREE.NoToneMapping,
	outputEncoding: THREE.sRGBEncoding,
	pixelRatio: window.devicePixelRatio,
}

const Experience = () => {
	const { theme, setTheme } = useContext(ThemeContext)
	const base = useRef()

	const handleColor = () => {
		if (base.current) {
			gsap.to(base.current.color, {
				ease: Power0.easeNone,
				duration: 0.3,
				r: theme === 'light' ? 1 : 1 / 255,
				g: theme === 'light' ? 1 : 1 / 255,
				b: theme === 'light' ? 1 : 6 / 255,
			})
		}
	}

	useEffect(() => {
		handleColor()
	}, [theme])

	return (
		<Canvas className='experience-canvas' gl={renderer} shadows>
			<directionalLight
				color={'#ffffff'}
				position={[0, 5, 0]}
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
				castShadow
			/>
			<Scene />
			<Plane
				receiveShadow
				rotation={[-Math.PI / 2, 0, 0]}
				position={[0, -0.1, 0]}
				args={[100, 100]}
			>
				<meshLambertMaterial
					ref={base}
					reflectivity={0}
					color={'#ffffff'}
				/>
			</Plane>
		</Canvas>
	)
}
export default Experience
