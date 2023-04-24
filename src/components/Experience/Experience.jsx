import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Html, OrthographicCamera, Plane } from '@react-three/drei'
import { useContext, useEffect, useRef, useState } from 'react'
import { gsap, Power0 } from 'gsap'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import Scene from '../Scene/Scene'
import './Experience.css'
import CameraPath from '../CameraPath/CameraPath'

const renderer = {
	antialias: true,
	toneMapping: THREE.NoToneMapping,
	outputEncoding: THREE.sRGBEncoding,
	pixelRatio: window.devicePixelRatio,
}

const camera = {
	position: [0, 2, 3],
	left: -2,
	right: 2,
	top: 2,
	bottom: -2,
	zoom: 250,
	near: 0.1,
	far: 50,
}

const Experience = () => {
	const { theme, setTheme } = useContext(ThemeContext)

	const [sceneCamera, setSceneCamera] = useState(() => {
		const camera = new THREE.OrthographicCamera(
			-window.innerWidth,
			window.innerWidth,
			window.innerHeight,
			-window.innerHeight,
			-50,
			50
		)
		camera.zoom = 250
		camera.position.set(0, 2.3, 3)
		camera.rotation.x = -Math.PI / 6

		return camera
	})

	const base = useRef()
	const cameraRef = useRef()

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
		if (cameraRef.current) {
			// cameraRef.current.lookAt(0, 6, 0)
			// cameraRef.current.position(0, 2, 3)
			// cameraRef.current.rotation.y  = -Math.PI / 6
		}

		handleColor()
	}, [theme])

	return (
		<Canvas
			className='experience-canvas'
			gl={renderer}
			camera={sceneCamera}
			onCreated={({ gl }) => {
				gl.setSize(window.innerWidth, window.innerHeight)
			}}
			orthographic
			shadows
		>
			<directionalLight
				color={'#ffffff'}
				position={[0, 5, 0]}
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
				castShadow
			/>
			{/* <CameraPath /> */}
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
					side={THREE.DoubleSide}
				/>
			</Plane>
		</Canvas>
	)
}
export default Experience
