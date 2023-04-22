import React, { useContext, useEffect, useRef, useState } from 'react'
import {
	MathUtils,
	MeshBasicMaterial,
	TextureLoader,
	ShaderMaterial,
	DoubleSide,
} from 'three'
import assets from '../../utils/assets'
import gsap from 'gsap'
import { ThemeContext } from '../../context/ThemeGlobalContext'

const textureLoader = new TextureLoader()

const Room = ({ nodes }) => {
	const { theme, setTheme } = useContext(ThemeContext)

	const group = useRef()

	const updateUniform = () => {
		group.current.children.forEach((child) => {
			gsap.to(child.material.uniforms?.uNightMix, {
				duration: 0.3,
				value: theme === 'light' ? 0 : 10,
				onInterrupt: () =>
					setTheme(theme === 'light' ? 'dark' : 'light'),
			})
		})
	}

	useEffect(() => {
		if (group.current) {
			updateUniform()
		}
	}, [theme])

	return (
		<group name='Room' ref={group}>
			<mesh
				name='room'
				geometry={nodes.room.geometry}
				material={assets.textures.bakedTexture}
				position={[0.79, 0.82, -1.41]}
				rotation={[0, 1.57, 0]}
			/>
			<mesh
				name='piso'
				geometry={nodes.piso.geometry}
				material={assets.textures.floorTexture}
				position={[0.08, 0, 0.08]}
				rotation={[Math.PI, 0, Math.PI]}
				castShadow
			/>
			<mesh
				name='cortinon'
				geometry={nodes.cortinon.geometry}
				material={assets.textures.curtainTexture}
				position={[-1.71, 1.55, 0.09]}
				rotation={[0, 0, -1.52]}
			/>

			<mesh
				name='SillaAsiento001'
				geometry={nodes.SillaAsiento001.geometry}
				material={assets.textures.bakedTexture}
				position={[-1.2, 0.56, -0.84]}
				rotation={[-Math.PI, 0.98, -Math.PI]}
			/>
			<mesh
				name='SillaEstructura001'
				geometry={nodes.SillaEstructura001.geometry}
				material={assets.textures.bakedTexture}
				position={[-1.36, 0.8, -0.75]}
				rotation={[-Math.PI, 0.98, -Math.PI]}
			/>
			<mesh
				name='SillaEspaldar001'
				geometry={nodes.SillaEspaldar001.geometry}
				material={assets.textures.bakedTexture}
				position={[-1.34, 0.8, -0.76]}
				rotation={[-Math.PI, 0.98, -Math.PI]}
			/>

			<mesh
				name='venom'
				geometry={nodes.venom.geometry}
				material={assets.textures.venomTexture}
				position={[-0.06, 1.04, -1.38]}
				rotation={[-0.17, 0, 0]}
			/>
			<mesh
				name='teeth001'
				geometry={nodes.teeth001.geometry}
				material={assets.textures.bakedTexture}
				position={[-0.06, 1.02, -1.33]}
				rotation={[-0.17, 0, 0]}
			/>
			<mesh
				name='mouth001'
				geometry={nodes.mouth001.geometry}
				material={assets.textures.bakedTexture}
				position={[-0.06, 1.02, -1.35]}
				rotation={[-0.17, 0, 0]}
			/>
		</group>
	)
}
export default Room
