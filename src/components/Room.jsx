import React, { useEffect, useRef, useState } from 'react'
import {
	useGLTF,
	useAnimations,
	useTexture,
	Html,
	useVideoTexture,
} from '@react-three/drei'
import * as THREE from 'three'
import room from '../assets/models/room.glb'

import videoBlender from '../assets/videos/makingroom.mp4'

import bakedTexture from '../assets/images/bakednight.jpg'
import curtainTexture from '../assets/images/cortina.jpg'
import floorTexture from '../assets/images/floor.jpg'
import venomTexture from '../assets/images/venom.jpg'

import redVertexShader from '../shaders/red/vertex.glsl'
import redFragmentShader from '../shaders/red/fragment.glsl'
import rgbVertexShader from '../shaders/rgb/vertex.glsl'
import rgbFragmentShader from '../shaders/rgb/fragment.glsl'
import { useFrame } from '@react-three/fiber'

const encodeTexture = (texture) => {
	texture.flipY = false
	texture.encoding = THREE.sRGBEncoding
	texture.minFilter = THREE.LinearFilter
}

const filterAnimations = (animations) => {
	return Object.entries(animations)
		.filter(([name, action]) => name.includes('Aro'))
		.map(([_, action]) => action)
}

const Room = (props) => {
	const group = useRef()

	const { nodes, materials, animations } = useGLTF(room)
	const { actions } = useAnimations(animations, group)

	const bakedMaterial = useTexture(bakedTexture, encodeTexture)
	const videoMaterial = useVideoTexture(videoBlender, {
		autoplay: true,
		loop: true,
		muted: true,
	})
	const curtainMaterial = useTexture(curtainTexture, encodeTexture)
	const floorMaterial = useTexture(floorTexture, encodeTexture)
	const venomMaterial = useTexture(venomTexture, encodeTexture)

	const rgbMaterial = new THREE.ShaderMaterial({
		vertexShader: rgbVertexShader,
		fragmentShader: rgbFragmentShader,
	})

	const redLightMaterial = new THREE.ShaderMaterial({
		vertexShader: redVertexShader,
		fragmentShader: redFragmentShader,
	})

	const lerpModel = (e) => {
		const x = e.clientX
		const xRotation = (x / window.innerWidth) * 2 - 1
		group.current.rotation.y = THREE.MathUtils.lerp(
			group.current.rotation.y,
			xRotation / 10 - Math.PI / 4,
			0.1
		)
	}

	const initializingModel = () => {
		group.current.rotation.y = -Math.PI / 4

		group.current.traverse((child) => {
			if (child.isMesh) child.geometry.computeVertexNormals()
		})

		const rgbAnimations = filterAnimations(actions)
		rgbAnimations.forEach((animation) => animation.play())
	}

	useEffect(() => {
		initializingModel()

		window.addEventListener('mousemove', lerpModel)

		return () => window.removeEventListener('mousemove', lerpModel)
	}, [])

	return (
		<>
			<group
				name='Scene'
				scale={[0.5, 0.5, 0.5]}
				// position={[2.3, 0, 1]}
				position={[0, 0, 1]}
				ref={group}
				dispose={null}
				{...props}
			>
				<mesh
					name='SillaAsiento001'
					geometry={nodes.SillaAsiento001.geometry}
					material={nodes.SillaAsiento001.material}
					position={[-1.2, 0.56, -0.84]}
					rotation={[-Math.PI, 0.98, -Math.PI]}
				>
					<meshBasicMaterial map={bakedMaterial} />
				</mesh>
				<mesh
					name='SillaEstructura001'
					geometry={nodes.SillaEstructura001.geometry}
					material={nodes.SillaEstructura001.material}
					position={[-1.36, 0.8, -0.75]}
					rotation={[-Math.PI, 0.98, -Math.PI]}
				>
					<meshBasicMaterial map={bakedMaterial} />
				</mesh>
				<mesh
					name='SillaEspaldar001'
					geometry={nodes.SillaEspaldar001.geometry}
					material={nodes.SillaEspaldar001.material}
					position={[-1.34, 0.8, -0.76]}
					rotation={[-Math.PI, 0.98, -Math.PI]}
				>
					<meshBasicMaterial map={bakedMaterial} />
				</mesh>
				<mesh
					name='teeth001'
					geometry={nodes.teeth001.geometry}
					material={nodes.teeth001.material}
					position={[-0.06, 1.02, -1.33]}
					rotation={[-0.17, 0, 0]}
				>
					<meshBasicMaterial map={bakedMaterial} />
				</mesh>
				<mesh
					name='mouth001'
					geometry={nodes.mouth001.geometry}
					material={nodes.mouth001.material}
					position={[-0.06, 1.02, -1.35]}
					rotation={[-0.17, 0, 0]}
				>
					<meshBasicMaterial map={bakedMaterial} />
				</mesh>
				<mesh
					name='room'
					geometry={nodes.room.geometry}
					position={[0.79, 0.82, -1.41]}
					rotation={[0, 1.57, 0]}
				>
					<meshBasicMaterial map={bakedMaterial} />
				</mesh>
				<mesh
					name='vidrioEntorno'
					geometry={nodes.vidrioEntorno.geometry}
					material={nodes.vidrioEntorno.material}
					position={[-1.86, 1.81, 0.09]}
				>
					<meshBasicMaterial
						color='black'
						transparent
						opacity={0.4}
					/>
				</mesh>
				<mesh
					name='piso'
					geometry={nodes.piso.geometry}
					position={[0.08, 0, 0.08]}
					rotation={[Math.PI, 0, Math.PI]}
					castShadow
				>
					<meshBasicMaterial
						map={floorMaterial}
						map-flipY={false}
						side={THREE.DoubleSide}
					/>
				</mesh>
				<mesh
					name='vidrioCPU'
					geometry={nodes.vidrioCPU.geometry}
					material={nodes.vidrioCPU.material}
					position={[-0.63, 0.73, -1.46]}
				>
					<meshBasicMaterial
						color='black'
						transparent
						opacity={0.4}
					/>
				</mesh>
				<mesh
					name='venom'
					geometry={nodes.venom.geometry}
					material={nodes.venom.material}
					position={[-0.06, 1.04, -1.38]}
					rotation={[-0.17, 0, 0]}
				>
					<meshBasicMaterial map={venomMaterial} />
				</mesh>
				<mesh
					name='cortinon'
					geometry={nodes.cortinon.geometry}
					material={nodes.cortinon.material}
					position={[-1.71, 1.55, 0.09]}
					rotation={[0, 0, -1.52]}
				>
					<meshBasicMaterial map={curtainMaterial} />
				</mesh>
				<mesh
					name='monitorInteractivo'
					geometry={nodes.monitorInteractivo.geometry}
					material={nodes.monitorInteractivo.material}
					position={[-1.18, 1.076, -1.37]}
				>
					<meshBasicMaterial map={videoMaterial} />
				</mesh>
				<mesh
					name='ledFrontal'
					geometry={nodes.ledFrontal.geometry}
					material={redLightMaterial}
					position={[-0.62, 0.8, -1.2098]}
				>
					<meshBasicMaterial color='red' />
				</mesh>
				<mesh
					name='aroTrasero'
					geometry={nodes.aroTrasero.geometry}
					material={rgbMaterial}
					position={[-0.55, 0.85, -1.67]}
				/>
				<mesh
					name='aroSuperior2'
					geometry={nodes.aroSuperior2.geometry}
					material={rgbMaterial}
					position={[-0.54, 0.96, -1.4]}
				/>
				<mesh
					name='aroSuperior1'
					geometry={nodes.aroSuperior1.geometry}
					material={rgbMaterial}
					position={[-0.54, 0.96, -1.54]}
				/>
				<mesh
					name='aroFrontal3'
					geometry={nodes.aroFrontal3.geometry}
					material={rgbMaterial}
					position={[-0.52, 0.58, -1.23]}
				/>
				<mesh
					name='aroFrontal2'
					geometry={nodes.aroFrontal2.geometry}
					material={rgbMaterial}
					position={[-0.52, 0.71, -1.23]}
				/>
				<mesh
					name='aroFrontal1'
					geometry={nodes.aroFrontal1.geometry}
					material={rgbMaterial}
					position={[-0.52, 0.84, -1.23]}
				/>
				<mesh
					name='ledCPU'
					geometry={nodes.ledCPU.geometry}
					material={nodes.ledCPU.material}
					position={[-0.61, 0.71, -1.68]}
					rotation={[0, 0, -Math.PI / 2]}
				/>
				<mesh
					name='ledEscritorio'
					geometry={nodes.ledEscritorio.geometry}
					material={nodes.ledEscritorio.material}
					position={[-1.2, 1.14, -1.58]}
				/>
				<mesh
					name='luzTeclas'
					geometry={nodes.luzTeclas.geometry}
					material={redLightMaterial}
					position={[-1.205, 0.935, -1.298]}
					rotation={[-Math.PI / 2, 0, -Math.PI]}
				/>
			</group>
		</>
	)
}

useGLTF.preload(room)

export default Room
