import * as THREE from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import React, {
	useContext,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react'
import { useLocation } from 'react-router-dom'
import { Plane } from '@react-three/drei'
import GSAP from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import Scene from '../Scene/Scene'
import Scene2 from '../Scene/Scene2'
import './Experience.css'

const renderer = {
	antialias: true,
	toneMapping: THREE.NoToneMapping,
	outputEncoding: THREE.sRGBEncoding,
	pixelRatio: window.devicePixelRatio,
}

const Experience = () => {
	const { theme } = useContext(ThemeContext)
	const base = useRef()
	const plane = useRef()

	const location = useLocation()

	const handleColor = () => {
		GSAP.to(base.current.color, {
			duration: 0.3,
			r: theme === 'light' ? 1 : 3 / 255,
			g: theme === 'light' ? 1 : 3 / 255,
			b: theme === 'light' ? 1 : 21 / 255,
		})
	}

	const setScrollTrigger = () => {
		const firstMovieTimeLine = new GSAP.timeline({
			scrollTrigger: {
				scroller: '.page-wrapper',
				trigger: '.first-move',
				start: 'bottom top',
				end: 'bottom bottom',
				scrub: 0.6,
				invalidateOnRefresh: true,
			},
		}).to(plane.current.position, {
			y: -5,
		})
	}

	useEffect(() => {
		if (plane.current) {
			setScrollTrigger()
		}
	}, [plane.current])

	useEffect(() => {
		if (base.current) {
			handleColor()
		}
	}, [theme, location.pathname])

	return (
		<Canvas className='experience-canvas' gl={renderer} shadows>
			<directionalLight
				color={'#ffffff'}
				position={[0, 5, 0]}
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
				castShadow
			/>

			{location.pathname === '/' ? (
				<React.Fragment>
					<Scene />
					<Plane
						ref={plane}
						receiveShadow
						rotation={[-Math.PI / 2, 0, 0]}
						position={[0, -0.169, 0]}
						args={[100, 100]}
					>
						<meshLambertMaterial
							ref={base}
							reflectivity={0}
							color={theme === 'light' ? '#ffffff' : '#fcfcfc'}
						/>
					</Plane>
				</React.Fragment>
			) : (
				<Scene2 />
			)}
		</Canvas>
	)
}
export default Experience
