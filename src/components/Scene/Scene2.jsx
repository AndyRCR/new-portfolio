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
import assets from '../../utils/assets'

import AudioPopup from '../AudioPopup/AudioPopup'
import Room from '../Room/Room'
import Glass from '../Glass/Glass'
import Screen from '../Screen/Screen'
import Lights from '../Lights/Lights'
import ScreenRoom from '../Room/ScreenRoom'
import ScreenGlass from '../Glass/ScreenGlass'
import ScreenLights from '../Lights/ScreenLights'
import ScreenForm from '../Screen/ScreenForm'
import ContactForm from '../ContactForm/ContactForm'

const filterAnimations = (animations) => {
	return Object.entries(animations)
		.filter(([name, action]) => name.includes('Aro'))
		.map(([_, action]) => action)
}

const Scene = (props) => {
	const renderer = useThree((state) => state.gl.domElement)
	const { viewport } = useThree()
	const { theme, modelLoaded, setModelLoaded } = useContext(ThemeContext)

	const [isOrthographicCamera, setIsOrthographicCamera] = useState(true)

	const meshRef = useRef()
	const htmlRef = useRef()

	const group = useRef()
	const model = useGLTF(assets.models.room)
	const ortCamera = useRef()
	const perspCamera = useRef()

	const screenGroup = useRef()
	const screenModel = useGLTF(assets.models.screenmodel)
	const { actions } = useAnimations(screenModel.animations, screenGroup)

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

	const lerpCamera = (e) => {
		const x = e.clientX
		const rotation = ((x - window.innerWidth / 2) * 2) / window.innerWidth
		ortCamera.current.rotation.y = rotation * -0.025
	}

	const playAnimations = () => {
		const rgbAnimations = filterAnimations(actions)
		rgbAnimations.forEach((animation) => animation.play())
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

	const initializingSecondModel = () => {
		screenGroup.current.position.z = 2
	}

	const setScrollTrigger = () => {
		initializingFirstModel()
		initializingSecondModel()

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
				const fixButton = document.querySelector('.fix-button')
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
							return window.innerWidth * 0.0008
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
						x: 0.8,
						y: 0.8,
						z: 0.8,
					},
					'same'
				)
				secondMovieTimeLine.to(
					fixButton,
					{
						scale: group.current.scale.x * 1.8,
					},
					'same'
				)
				secondMovieTimeLine.to(
					perspCamera.current.position,
					{
						x: perspCamera.current.position.x - 0.5,
					},
					'same'
				)

				//Third Section
				const thirdMovieTimeLine = new GSAP.timeline({
					scrollTrigger: {
						scroller: '.page-wrapper',
						trigger: '.third-move',
						start: 'top top',
						end: `bottom -20%`,
						scrub: 0.6,
						invalidateOnRefresh: true,
						onLeave: () => setIsOrthographicCamera(false),
						onEnterBack: () => setIsOrthographicCamera(true),
					},
				})

				thirdMovieTimeLine.to(
					group.current.position,
					{ x: 0, z: 4 },
					'same'
				)
				thirdMovieTimeLine.to(
					group.current.scale,
					{
						x: 1.6,
						y: 1.6,
						z: 1.6,
					},
					'same'
				)
			},
			//Mobile
			'(max-width: 1000px)': () => {},
		})
	}

	useFrame(() => {
		const fixButton = document.querySelector('.fix-button')

		lerp.current = GSAP.utils.interpolate(
			lerp.current,
			lerp.target,
			lerp.ease
		)

		if (isOrthographicCamera) {
			group.current.rotation.y = lerp.current

			const playButton = document.querySelector('.play-music-button')
			// fixButton.style.visibility = 'visible'

			const top = playButton?.getBoundingClientRect().top
			const left = playButton?.getBoundingClientRect().left
			// fixButton.style.top = `${top}px`
			// fixButton.style.left = `${left}px`
		} else {
			// ortCamera.current.rotation.y = -(lerp.current + Math.PI / 4) * 0.4
			fixButton.style.visibility = 'hidden'
		}
	})

	useEffect(() => {
		if (group.current && screenGroup.current) {
			setModelLoaded(true)
			setScrollTrigger()
			playAnimations()
			window.addEventListener('mousemove', lerpModel)
			window.addEventListener('mousemove', lerpCamera)
		}
		return () => {
			window.removeEventListener('mousemove', lerpModel)
			window.removeEventListener('mousemove', lerpCamera)
		}
	}, [])

	useEffect(() => {
		if (group.current && screenGroup.current) {
			initializingFirstModel()
			initializingSecondModel()
		}
	}, [viewport.width, viewport.height])

	useEffect(() => {
		if (meshRef.current) {
			htmlRef.current.position.set(
				meshRef.current.position.x,
				meshRef.current.position.y,
				meshRef.current.position.z
			)
		}
	}, [])

	useEffect(() => {
		if (htmlRef.current) {
			const container = document.querySelector('.fourth-move.last-margin')
			console.log(htmlRef.current)
			container.appendChild(htmlRef.current)
			renderer.autoClear = false
		}
		return () => {
			container.removeChild(htmlRef.current)
			renderer.autoClear = true
		}
	}, [renderer])

	return (
		<>
			<OrthographicCamera
				ref={perspCamera}
				makeDefault={isOrthographicCamera}
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

			<PerspectiveCamera
				ref={ortCamera}
				makeDefault={!isOrthographicCamera}
				resolution={[window.innerWidth, window.innerHeight]}
				near={0.1}
				far={1000}
				fov={75}
				position={[-1.2, 1.31, 1.15]}
				rotation={[-Math.PI / 16, 0, 0]}
			/>

			<group
				visible={isOrthographicCamera}
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
			</group>

			<group
				visible={!isOrthographicCamera}
				ref={screenGroup}
				name='screenScene'
			>
				<ScreenRoom nodes={screenModel.nodes} />
				<ScreenGlass nodes={screenModel.nodes} />
				<mesh
					name='monitoInteractivo'
					scale={[1.008, 1.008, 1]}
					geometry={screenModel.nodes.monitoInteractivo.geometry}
					material={screenModel.nodes.monitoInteractivo.material}
					position={[-1.2, 1.23, -1.37]}
				/>
				<Html
					ref={htmlRef}
					rotation-y={2 * Math.PI}
					distanceFactor={0.4}
					position={[-1.2, 1.23, -1.37 + 0.003]}
					transform
					center
				>
					<ContactForm
						display={isOrthographicCamera ? 'none' : 'block'}
					/>
				</Html>
				<ScreenLights nodes={screenModel.nodes} />
			</group>
		</>
	)
}

useGLTF.preload(assets.models.room)
useGLTF.preload(assets.models.screenmodel)

export default Scene
