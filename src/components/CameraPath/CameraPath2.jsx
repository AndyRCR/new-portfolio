//Custom move camera for others projects

import {
	OrbitControls,
	OrthographicCamera,
	PerspectiveCamera,
} from '@react-three/drei'
import * as THREE from 'three'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import GSAP from 'gsap'
import { SizesContext } from '../../context/SizesGlobalContext'
import Camera from '../Camera/Camera'

const CameraPath2 = () => {
	const cameraRef = useRef()

	const [progress, setProgress] = useState(0)
	const [back, setBack] = useState(null)
	const [curve, setCurve] = useState(
		new THREE.CatmullRomCurve3(
			[
				// new THREE.Vector3(-1, 0, 0),
				// new THREE.Vector3(0, 0, -1),
				// new THREE.Vector3(1, 0, 0),
				// new THREE.Vector3(0, 0, 1),

				new THREE.Vector3(0, 1.5, 3),
				new THREE.Vector3(0, 0, -5),
				new THREE.Vector3(5, 2, 0),
				new THREE.Vector3(0, 5, 5),
				new THREE.Vector3(5, 0, 5),
				new THREE.Vector3(0, 5, 5),
				new THREE.Vector3(-2, 6, 5),
			],
			true
		)
	)
	const [curveObject, setCurveObject] = useState(() => {
		const points = curve.getPoints(50)
		const geometry = new THREE.BufferGeometry().setFromPoints(points)

		const material = new THREE.LineBasicMaterial({ color: 0xff0000 })
		const curveObject = new THREE.Line(geometry, material)

		return curveObject
	})
	const [position, setPosition] = useState(new THREE.Vector3(0, 0, 0))
	const [lookAtPosition, setLookAtPosition] = useState(
		new THREE.Vector3(0, 0, 0)
	)
	const [directionalVector, setDirectionalVector] = useState(
		new THREE.Vector3(0, 0, 0)
	)
	const [staticVector, setStaticVector] = useState(new THREE.Vector3(0, 1, 0))
	const [crossVector, setCrossVector] = useState(new THREE.Vector3(0, 0, 0))
	const [lerp, setLerp] = useState({
		current: 0,
		target: 0,
		ease: 0.1,
	})

	const handleScroll = (e) => {
		if (e.deltaY > 0) {
			if (lerp.target >= 1) return
			lerp.target += 0.01
			setBack(false)
		} else {
			if (lerp.target <= 0) return
			lerp.target -= 0.01
			setBack(true)
		}
	}

	useFrame(() => {
		lerp.current = GSAP.utils.interpolate(
			lerp.current,
			lerp.target,
			lerp.ease
		)

		curve.getPointAt(lerp.current % 1, position)
		cameraRef.current.position.copy(position)

		directionalVector.subVectors(
			curve.getPointAt((lerp.current % 1) + 0.000001),
			position
		)
		directionalVector.normalize()
		crossVector.crossVectors(directionalVector, staticVector)
		crossVector.multiplyScalar(0.5)
		cameraRef.current.lookAt(0, 0, 0)
		// if (back) {
		// 	lerp.target -= 0.001
		// } else {
		// 	lerp.target += 0.001
		// }
		// lerp.target = GSAP.utils.clamp(0, 1, lerp.target)
		// lerp.current = GSAP.utils.clamp(0, 1, lerp.current)

		// curve.getPointAt(lerp.current, position)
		// curve.getPointAt(lerp.current + 0.00001, lookAtPosition)
		// cameraRef.current.position.copy(position)
		// cameraRef.current.lookAt(lookAtPosition)
	})

	useEffect(() => {
		// const curve = new THREE.CatmullRomCurve3(
		// 	[
		// 		new THREE.Vector3(-10, 0, 10),
		// 		new THREE.Vector3(-5, 5, 5),
		// 		new THREE.Vector3(0, 0, 0),
		// 		new THREE.Vector3(5, -5, 5),
		// 	],
		// 	true
		// )

		// curveRef.current = curve

		if (cameraRef.current) {
			// cameraRef.current.lookAt(0, 0, 0)
			window.addEventListener('wheel', handleScroll)
		}

		return () => window.removeEventListener('wheel', handleScroll)
	}, [lerp.current])

	return (
		<React.Fragment>
			{/* <OrbitControls /> */}
			{/* <gridHelper args={[100, 100]} /> */}
			{/* <axesHelper args={[5, 5, 5]} /> */}
			{/* <Camera makeDefault ref={cameraRef} /> */}
			<PerspectiveCamera
				makeDefault
				ref={cameraRef}
				resolution={[window.innerWidth, window.innerHeight]}
				near={0.1}
				far={1000}
				position={[0, 1.5, 3]}
			/>
			{/* <OrthographicCamera
				makeDefault
				resolution={[window.innerWidth, window.innerHeight]}
				ref={cameraRef}
				left={((-window.innerWidth / window.innerHeight) * 5) / 2}
				right={((window.innerWidth / window.innerHeight) * 5) / 2}
				top={5 / 2}
				bottom={-5 / 2}
				near={-50}
				far={50}
				position={[0, 1.5, 3]}
			/> */}
			<directionalLight
				color={'#ffffff'}
				position={[0, 5, 0]}
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
				castShadow
			/>
			{/* <mesh ref={vectorRef} position={new THREE.Vector3(0, 0, 0)} /> */}
			{/* <primitive object={curveObject} /> */}
		</React.Fragment>
	)
}

export default CameraPath2
