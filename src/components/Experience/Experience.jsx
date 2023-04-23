import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, OrbitControls, Plane } from '@react-three/drei'
import { useContext, useEffect, useRef } from 'react'
import { gsap, Power0 } from 'gsap'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import Scene from '../Scene/Scene'
import './Experience.css'
import PlayMusic from '../PlayMusicMessage/PlayMusicMessage'

const camera = {
	position: [0, 1.5, 3],
	left: -2,
	right: 2,
	top: 2,
	bottom: -2,
	near: 0.1,
	far: 20,
	zoom: 220,
}

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
		<Canvas
			className='experienceCanvas'
			orthographic
			shadows
			camera={camera}
			gl={renderer}
			onCreated={({ gl }) =>
				gl.setSize(window.innerWidth, window.innerHeight)
			}
		>
			{/* <OrbitControls /> */}
			{/* <axesHelper args={[5, 5, 5]} /> */}
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
				args={[1000, 1000]}
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
