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
import { Cat } from '../Cat/Cat'

import assets from '../../utils/assets'
import AudioPopup from '../AudioPopup/AudioPopup'
import Room from '../Room/Room'
import Glass from '../Glass/Glass'
import Screen from '../Screen/Screen'
import Lights from '../Lights/Lights'
import PlayMusicMessage from '../PlayMusicMessage/PlayMusicMessage'
import PlayMusicButton from '../PlayMusicButton/PlayMusicButton'
import Circles from '../Circles/Circles'

const Scene = (props) => {
	const { viewport, gl } = useThree()
	const { theme, setTheme, modelLoaded, setModelLoaded } =
		useContext(ThemeContext)
	const { audioIsPlaying, audioIsLoading, handleStop, handlePlay } =
		useContext(AudioContext)

	const ortCamera = useRef()
	const musicButton = useRef()
	const musicMessage = useRef()

	const group = useRef()
	const model = useGLTF(assets.models.room)

	const cat = useRef()
	const catmodel = useGLTF(assets.models.catmodel)

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
			'(max-width: 1000px)': () => {
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
				firstMovieTimeLine.to(
					group.current.scale,
					{
						x: 0.4,
						y: 0.4,
						z: 0.4,
					},
					'same'
				)
				firstMovieTimeLine.to(
					group.current.position,
					{
						z: () => {
							return window.innerHeight * 0.001
						},
					},
					'same'
				)
				firstMovieTimeLine.to(
					ortCamera.current.position,
					{
						y: () => {
							return window.innerHeight * 0.002
						},
					},
					'same'
				)

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
					group.current.scale,
					{
						x: 0.55,
						y: 0.55,
						z: 0.55,
					},
					'same'
				)
				secondMovieTimeLine.to(
					musicMessage.current.position,
					{
						z: () => {
							return musicMessage.current.position.z - 1
						},
					},
					'same'
				)
				secondMovieTimeLine.to(
					musicMessage.current.scale,
					{
						x: 0.8,
						y: 0.8,
						z: 0.8,
					},
					'same'
				)
				secondMovieTimeLine.to(
					musicButton.current.position,
					{
						x: 0.4,
						y: 0.5,
						z: -0.9,
					},
					'same'
				)
				secondMovieTimeLine.to(
					ortCamera.current.position,
					{
						y: () => {
							return window.innerHeight * 0.0025
						},
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
					group.current.scale,
					{
						x: 1.3,
						y: 1.3,
						z: 1.3,
					},
					'same'
				)
				thirdMovieTimeLine.to(
					ortCamera.current.position,
					{
						y: () => {
							return window.innerHeight * 0.0045
						},
					},
					'same'
				)
			},
			all: () => {
				const sections = document.querySelectorAll('.section')

				sections.forEach((section) => {
					const progressWrapper =
						section.querySelector('.progress-wrapper')
					const progressBar = section.querySelector('.progress-bar')

					if (section.classList.contains('right')) {
						GSAP.to(section, {
							borderTopLeftRadius: 10,
							scrollTrigger: {
								scroller: '.page-wrapper',
								trigger: section,
								start: 'top bottom',
								end: 'top top',
								scrub: 0.6,
							},
						})

						GSAP.to(section, {
							borderBottomLeftRadius: 700,
							scrollTrigger: {
								scroller: '.page-wrapper',
								trigger: section,
								start: 'bottom bottom',
								end: 'bottom top',
								scrub: 0.6,
							},
						})
					} else {
						GSAP.to(section, {
							borderTopRightRadius: 10,
							scrollTrigger: {
								scroller: '.page-wrapper',
								trigger: section,
								start: 'top bottom',
								end: 'top top',
								scrub: 0.6,
							},
						})

						GSAP.to(section, {
							borderBottomRightRadius: 700,
							scrollTrigger: {
								scroller: '.page-wrapper',
								trigger: section,
								start: 'bottom bottom',
								end: 'bottom top',
								scrub: 0.6,
							},
						})
					}

					GSAP.from(progressBar, {
						scaleY: 0,
						scrollTrigger: {
							scroller: '.page-wrapper',
							trigger: section,
							start: 'top top',
							end: 'bottom bottom',
							scrub: 0.6,
							pin: progressWrapper,
							pinSpacing: false,
						},
					})
				})
			},
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
		setTimeout(() => {
			document.querySelector('.theme-switch .switch-container').click()
			setTimeout(
				() =>
					document
						.querySelector('.theme-switch .switch-container')
						.click(),
				50
			)
		}, 100)

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
		<group dispose={null}>
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
			<group name='Scene' rotation={[0, -Math.PI / 4, 0]} ref={group}>
				<group ref={musicMessage}>
					<Html
						rotation-y={Math.PI / 4}
						distanceFactor={3.5}
						position={[-0.2, 1.2, 1.2]}
						transform
						occlude
					>
						<PlayMusicMessage audioIsPlaying={audioIsPlaying} />
					</Html>
				</group>
				<group ref={musicButton}>
					<Html
						rotation-y={Math.PI / 4}
						distanceFactor={3.5}
						// position={[0, 0.7, 0.6]}
						position={[-0.2, 0.7, 1.8]}
						transform
						occlude
					>
						<PlayMusicButton
							audioIsPlaying={audioIsPlaying}
							audioIsLoading={audioIsLoading}
						/>
					</Html>
				</group>
				<Room nodes={model.nodes} />
				<Glass nodes={model.nodes} />
				<Screen nodes={model.nodes} />
				<Lights nodes={model.nodes} />
				<Cat />
				<Circles theme={theme} />
			</group>
		</group>
	)
}

useGLTF.preload(assets.models.room)
useGLTF.preload(assets.models.catmodel)

export default Scene
