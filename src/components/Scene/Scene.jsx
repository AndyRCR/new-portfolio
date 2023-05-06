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
import Cat from '../Cat/Cat'

import assets from '../../utils/assets'
import AudioPopup from '../AudioPopup/AudioPopup'
import Room from '../Room/Room'
import Glass from '../Glass/Glass'
import Screen from '../Screen/Screen'
import Lights from '../Lights/Lights'
import PlayMusicMessage from '../PlayMusicMessage/PlayMusicMessage'
import PlayMusicButton from '../PlayMusicButton/PlayMusicButton'
import Circles from '../Circles/Circles'
import { ModelContext } from '../../context/ModelGlobalContext'
import { LanguageContext } from '../../context/LanguageGlobalContext'
import CatMessage from '../CatMessage/CatMessage'

const Scene = (props) => {
	const { viewport } = useThree()
	const { theme, isDesktop } = useContext(ThemeContext)
	const { setModelLoaded, quitIntro } = useContext(ModelContext)
	const { language } = useContext(LanguageContext)
	const { audioIsPlaying, audioIsLoading, handleStop, handlePlay } =
		useContext(AudioContext)

	const ortCamera = useRef()
	const musicButton = useRef()
	const musicMessage = useRef()
	const catMessage = useRef()

	const group = useRef()
	const model = useGLTF(assets.models.room)

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

		let scale
		if (viewport.width <= 5) {
			if (viewport.width <= 2) {
				scale = viewport.height <= 3 ? 0.2 : 0.25
			} else scale = 0.3
		} else {
			scale = viewport.width / 14
		}

		let positionZ
		if (viewport.width <= 4) {
			if (viewport.width <= 2) {
				positionZ =
					viewport.height <= 3
						? viewport.height / 3
						: viewport.height / 3.5
			} else positionZ = viewport.height / 3
		} else {
			positionZ = viewport.height / 7.5
		}
		group.current.position.z = positionZ

		group.current.scale.set(scale, scale, scale)
	}

	const setScrollTrigger = () => {
		GSAP.registerPlugin(ScrollTrigger)
		ScrollTrigger.config({
			autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
			ignoreMobileResize: true,
		})
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

				GSAP.to('.lets-start', {
					opacity: 0,
					scrollTrigger: {
						scroller: '.page-wrapper',
						trigger: '.hero',
						start: 'top -10px',
						end: 'center center',
						scrub: 0.6,
					},
				})

				sections.forEach((section, i) => {
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

						if (i !== 2) {
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
						}
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
			if (location.pathname === '/') {
				const fixButton = document.querySelector('.fix-button')
				const playButton = document.querySelector('.play-music-button')
				const top = playButton?.getBoundingClientRect().top
				const left = playButton?.getBoundingClientRect().left
				fixButton.style.top = `${top}px`
				fixButton.style.left = `${
					window.innerWidth < 1250 ? left : left - 150
				}px`
				fixButton.style.width = `${
					playButton?.getBoundingClientRect().width
				}px`
				fixButton.style.height = `${
					playButton?.getBoundingClientRect().height
				}px`

				const fixmessage = document.querySelector('.fix-message')
				const catMessage = document.querySelector('.cat-message')
				const ctop = catMessage?.getBoundingClientRect().top
				const cleft = catMessage?.getBoundingClientRect().left
				fixmessage.style.top = `${ctop}px`
				fixmessage.style.left = `${
					window.innerWidth < 1250 ? cleft : cleft - 150
				}px`
				fixmessage.style.width = `${
					catMessage?.getBoundingClientRect().width
				}px`
				fixmessage.style.height = `${
					catMessage?.getBoundingClientRect().height
				}px`
			}

			lerp.current = GSAP.utils.interpolate(
				lerp.current,
				lerp.target,
				lerp.ease
			)

			group.current.rotation.y = lerp.current
		}
	})

	useEffect(() => {
		setScrollTrigger()
		window.addEventListener('mousemove', lerpModel)

		setTimeout(() => {
			document.querySelector('.theme-switch .switch-container').click()
			setTimeout(() => {
				document
					.querySelector('.theme-switch .switch-container')
					.click()

				setModelLoaded(true)
			}, 10)
		}, 100)

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
				<group ref={catMessage}>
					<Html
						rotation-y={Math.PI / 4}
						distanceFactor={1}
						position={[-1.55, 1, -1.25]}
						transform
						occlude
					>
						<CatMessage language={language} />
					</Html>
				</group>
				<group ref={musicMessage}>
					<Html
						rotation-y={Math.PI / 4}
						distanceFactor={3.5}
						position={[-0.2, 1.2, 1.2]}
						transform
						occlude
					>
						<PlayMusicMessage
							audioIsPlaying={audioIsPlaying}
							language={language}
							quitIntro={quitIntro}
						/>
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
							quitIntro={quitIntro}
						/>
					</Html>
				</group>
				<Room nodes={model.nodes} />
				<Glass nodes={model.nodes} />
				<Screen nodes={model.nodes} />
				<Lights nodes={model.nodes} />
				{isDesktop && <Cat />}
				<Circles theme={theme} />
			</group>
		</group>
	)
}

useGLTF.preload(assets.models.room)

export default Scene
