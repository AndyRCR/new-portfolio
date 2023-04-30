import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
import { CircleGeometry, MeshBasicMaterial } from 'three'
import { Circle } from '@react-three/drei'
import GSAP from 'gsap'

const Circles = ({ theme }) => {
	const circle1 = useRef()
	const circle2 = useRef()
	const circle3 = useRef()

	const setScrollTriggers = () => {
		GSAP.registerPlugin(ScrollTrigger)

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
		}).to(circle1.current.scale, {
			x: 5,
			y: 5,
			z: 5,
		})

		// Second Section
		const secondMovieTimeLine = new GSAP.timeline({
			scrollTrigger: {
				scroller: '.page-wrapper',
				trigger: '.second-move',
				start: 'top top',
				end: 'bottom bottom',
				scrub: 0.6,
				invalidateOnRefresh: true,
			},
		}).to(circle2.current.scale, {
			x: 3,
			y: 3,
			z: 3,
		})

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
		}).to(circle3.current.scale, {
			x: 3,
			y: 3,
			z: 3,
		})
	}

	useEffect(() => {
		if (circle1.current && circle2.current && circle3.current) {
			setScrollTriggers()
		}
	}, [])

	return (
		<React.Fragment>
			<Circle
				receiveShadow
				ref={circle1}
				args={[5, 40]}
				position={[0, -0.333, 0]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={[0, 0, 0]}
			>
				<meshStandardMaterial
					reflectivity={0}
					color={theme === 'light' ? '#87CEFA' : '#00175B'}
				/>
			</Circle>
			<Circle
				receiveShadow
				ref={circle2}
				args={[5, 40]}
				position={[0, -0.332, 0]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={[0, 0, 0]}
			>
				<meshStandardMaterial
					reflectivity={0}
					color={theme === 'light' ? '#6495ED' : '#001744'}
				/>
			</Circle>
			<Circle
				receiveShadow
				ref={circle3}
				args={[5, 40]}
				position={[0, -0.331, 0]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={[0, 0, 0]}
			>
				<meshStandardMaterial
					reflectivity={0}
					color={theme === 'light' ? '#B2FFFF' : '#111858'}
				/>
			</Circle>
		</React.Fragment>
	)
}
export default Circles
