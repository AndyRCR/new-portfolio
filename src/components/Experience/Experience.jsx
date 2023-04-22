import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls, Plane } from '@react-three/drei'
import Scene from '../Scene/Scene'
import { useContext, useEffect, useRef } from 'react'
import { gsap, Power0 } from 'gsap'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import './Experience.css'

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
			camera={{
				position: [0, 1.5, 3],
				left: -2,
				right: 2,
				top: 2,
				bottom: -2,
				far: 20,
				zoom: 220,
			}}
			onCreated={({ gl }) =>
				gl.setSize(window.innerWidth, window.innerHeight)
			}
			gl={{
				antialias: true,
				toneMapping: THREE.NoToneMapping,
				outputEncoding: THREE.sRGBEncoding,
				pixelRatio: window.devicePixelRatio,
			}}
			shadows
		>
			<Scene />
			<Plane
				receiveShadow
				rotation={[-Math.PI / 2, 0, 0]}
				position={[0, -0.05, 0]}
				args={[10, 10]}
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
