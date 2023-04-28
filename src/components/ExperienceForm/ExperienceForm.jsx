import { PerspectiveCamera, Plane } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useContext, useEffect, useRef } from 'react'
import { NoToneMapping, sRGBEncoding } from 'three'
import Scene2 from '../Scene/Scene2'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import { gsap } from 'gsap'

const renderer = {
	antialias: true,
	toneMapping: NoToneMapping,
	outputEncoding: sRGBEncoding,
	pixelRatio: window.devicePixelRatio,
}

const ExperienceForm = () => {
	const { theme, canvas } = useContext(ThemeContext)

	const perspCamera = useRef()
	const base = useRef()

	const handleColor = () => {
		if (base.current) {
			gsap.to(base.current.color, {
				duration: 0.3,
				r: theme === 'light' ? 1 : 3 / 255,
				g: theme === 'light' ? 1 : 3 / 255,
				b: theme === 'light' ? 1 : 21 / 255,
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
			<Scene2 />
		</Canvas>
	)
}
export default ExperienceForm
