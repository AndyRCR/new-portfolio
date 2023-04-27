import React, { useContext, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import GSAP from 'gsap'
import {
	useGLTF,
	useAnimations,
	Html,
	PerspectiveCamera,
	OrthographicCamera,
	EnvironmentPortal,
} from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import { AudioContext } from '../../context/AudioGlobalContext'
import { CameraContext } from '../../context/CameraGlobalContext'
import { Cat } from '../Cat/Cat'

import assets from '../../utils/assets'
import AudioPopup from '../AudioPopup/AudioPopup'
import Room from '../Room/Room'
import Glass from '../Glass/Glass'
import Screen from '../Screen/Screen'
import Lights from '../Lights/Lights'

const filterAnimations = (animations) => {
	return Object.entries(animations)
		.filter(([name, action]) => name.includes('Aro'))
		.map(([_, action]) => action)
}

const Scene = (props) => {
	const { viewport } = useThree()
	const { theme, modelLoaded, setModelLoaded } = useContext(ThemeContext)

	const ortCamera = useRef()
	const group = useRef()
	const model = useGLTF(assets.models.room)

	const cat = useRef()
	const catmodel = useGLTF(assets.models.catmodel)
	const { actions } = useAnimations(catmodel.animations, cat)

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

	const initializingFirstModel = () => {
		group.current.position.x = viewport.width <= 4 ? 0 : viewport.width / 4
		group.current.position.z =
			viewport.width <= 4
				? viewport.width <= 2
					? viewport.width / 1.5
					: viewport.width / 3
				: viewport.height / 7.5
		const scale =
			viewport.width <= 5
				? viewport.width <= 2
					? 0.25
					: 0.3
				: viewport.width / 14

		group.current.scale.set(scale, scale, scale)
	}

	const setScrollTrigger = () => {
		initializingFirstModel()

		GSAP.registerPlugin(ScrollTrigger)
		ScrollTrigger.matchMedia({
			//Desktop
			'(min-width: 1001px)': () => {
				//First Section
				const firstMovieTimeLine = new GSAP.timeline({
					scrollTrigger: {
						scroller: '.page-wrapper',
						trigger: '.first-move',
						start: 'top top',
						end: 'bottom bottom',
						scrub: 0.6,
						invalidateOnRefresh: true,
					},
				})

				firstMovieTimeLine.to(group.current.position, {
					x: () => {
						return -window.innerWidth * 0.00092
					},
				})

				//Second Section
				const secondMovieTimeLine = new GSAP.timeline({
					scrollTrigger: {
						scroller: '.page-wrapper',
						trigger: '.second-move',
						start: 'top top',
						end: 'bottom bottom',
						scrub: 0.6,
						invalidateOnRefresh: true,
					},
				})
				secondMovieTimeLine.to(
					group.current.position,
					{
						x: () => {
							return window.innerWidth * 0.0009
						},
						z: () => {
							return window.innerHeight * 0.001
						},
					},
					'same'
				)
				secondMovieTimeLine.to(
					group.current.scale,
					{
						x: 0.7,
						y: 0.7,
						z: 0.7,
					},
					'same'
				)

				//Third Section
				const thirdMovieTimeLine = new GSAP.timeline({
					scrollTrigger: {
						scroller: '.page-wrapper',
						trigger: '.third-move',
						start: 'top top',
						end: `bottom bottom`,
						scrub: 0.6,
						invalidateOnRefresh: true,
					},
				})

				thirdMovieTimeLine.to(
					group.current.position,
					{
						x: () => {
							return -window.innerWidth * 0.001
						},
						z: () => {
							return 6
						},
					},
					'same'
				)
				thirdMovieTimeLine.to(
					group.current.scale,
					{
						x: 2,
						y: 2,
						z: 2,
					},
					'same'
				)
			},
			//Mobile
			'(max-width: 1000px)': () => {},
		})
	}

	useFrame(() => {
		if (group.current) {
			const fixButton = document.querySelector('.fix-button')
			const playButton = document.querySelector('.play-music-button')
			const top = playButton?.getBoundingClientRect().top
			const left = playButton?.getBoundingClientRect().left
			fixButton.style.top = `${top}px`
			fixButton.style.left = `${left}px`
			fixButton.style.width = `${
				playButton?.getBoundingClientRect().width
			}px`
			fixButton.style.height = `${
				playButton?.getBoundingClientRect().height
			}px`

			lerp.current = GSAP.utils.interpolate(
				lerp.current,
				lerp.target,
				lerp.ease
			)

			group.current.rotation.y = lerp.current
		}
	})

	useEffect(() => {
		if (group.current) {
			setModelLoaded(true)
			setScrollTrigger()
			window.addEventListener('mousemove', lerpModel)
		}
		return () => {
			window.removeEventListener('mousemove', lerpModel)
		}
	}, [])

	useEffect(() => {
		if (group.current) {
			initializingFirstModel()
		}
	}, [viewport.width, viewport.height])

	return (
		<>
			<OrthographicCamera
				ref={ortCamera}
				makeDefault
				left={-2}
				right={2}
				top={2}
				bottom={-2}
				near={-50}
				far={50}
				zoom={250}
				rotation={[-Math.PI / 6, 0, 0]}
				position={[0, 2, 3]}
			/>
			<group
				name='Scene'
				rotation={[0, -Math.PI / 4, 0]}
				ref={group}
				dispose={null}
			>
				<AudioPopup />
				<Room nodes={model.nodes} />
				<Glass nodes={model.nodes} />
				<Screen nodes={model.nodes} />
				<Lights nodes={model.nodes} />
				<Cat />
			</group>
		</>
	)
}

useGLTF.preload(assets.models.room)
useGLTF.preload(assets.models.catmodel)

export default Scene
