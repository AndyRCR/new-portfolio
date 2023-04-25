import React, { useContext, useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations, Html } from '@react-three/drei'
import * as THREE from 'three'
import GSAP from 'gsap'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import { AudioContext } from '../../context/AudioGlobalContext'
import { useFrame, useThree } from '@react-three/fiber'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

import AudioPopup from '../AudioPopup/AudioPopup'
import Room from '../Room/Room'
import Glass from '../Glass/Glass'
import Screen from '../Screen/Screen'
import Lights from '../Lights/Lights'
import assets from '../../utils/assets'

const filterAnimations = (animations) => {
	return Object.entries(animations)
		.filter(([name, action]) => name.includes('Aro'))
		.map(([_, action]) => action)
}

const Scene = (props) => {
	const group = useRef()

	const { theme, modelLoaded, setModelLoaded } = useContext(ThemeContext)

	const { nodes, materials, animations } = useGLTF(assets.models.room)
	const { actions } = useAnimations(animations, group)

	const { viewport } = useThree()

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

	const initializingModel = () => {
		group.current.position.x = viewport.width <= 4 ? 0 : viewport.width / 4
		group.current.position.z =
			viewport.width <= 4
				? viewport.width <= 2
					? viewport.width / 3
					: viewport.width / 5
				: 0
		const scale =
			viewport.width <= 5
				? viewport.width <= 2
					? 0.25
					: 0.35
				: viewport.width / 14

		group.current.scale.set(scale, scale, scale)
	}

	// const playAnimations = () => {
	// 	const rgbAnimations = filterAnimations(actions)
	// 	rgbAnimations.forEach((animation) => animation.play())
	// }

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
						return -window.innerWidth * 0.0009
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
						x: 0.8,
						y: 0.8,
						z: 0.8,
					},
					'same'
				)

				//Third Section
				const thirdMovieTimeLine = new GSAP.timeline({
					scrollTrigger: {
						scroller: '.page-wrapper',
						trigger: '.third-move',
						start: 'top top',
						end: 'bottom -50%',
						scrub: 0.6,
						markers: true,
						invalidateOnRefresh: true,
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
						x: 1.8,
						y: 1.8,
						z: 1.8,
					},
					'same'
				)
			},
			//Mobile
			'(max-width: 1000px)': () => {
				console.log('mobile')
			},
		})
	}

	useFrame(() => {
		lerp.current = GSAP.utils.interpolate(
			lerp.current,
			lerp.target,
			lerp.ease
		)

		group.current.rotation.y = lerp.current

		if (modelLoaded) {
			const playButton = document.querySelector('.play-music-button')
			const fixButton = document.querySelector('.fix-button')

			const top = playButton.getBoundingClientRect().top
			const left = playButton.getBoundingClientRect().left
			fixButton.style.top = `${top}px`
			fixButton.style.left = `${left}px`
		}
	})

	useEffect(() => {
		if (group.current) {
			initializingModel()
			setModelLoaded(true)
			// playAnimations()
			setScrollTrigger()
			window.addEventListener('mousemove', lerpModel)
		}

		return () => window.removeEventListener('mousemove', lerpModel)
	}, [])

	useEffect(() => {
		if (group.current) {
			initializingModel()
		}
	}, [viewport.width, viewport.height])

	return (
		<group
			name='Scene'
			// scale={[scale, scale, scale]}
			rotation={[0, -Math.PI / 4, 0]}
			// position={[right, 0, bottom]}
			ref={group}
			dispose={null}
			{...props}
		>
			<AudioPopup />
			<Room nodes={nodes} />
			<Glass nodes={nodes} />
			<Screen nodes={nodes} />
			<Lights nodes={nodes} />
		</group>
	)
}

useGLTF.preload(assets.models.room)

export default Scene
