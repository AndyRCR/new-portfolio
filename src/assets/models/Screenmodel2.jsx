/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 screenmodel2.glb
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
	const group = useRef()
	const { nodes, materials, animations } = useGLTF('/screenmodel2.glb')
	const { actions } = useAnimations(animations, group)
	return (
		<group ref={group} {...props} dispose={null}>
			<group name='Scene'>
				<mesh
					name='room001_LOD1'
					geometry={nodes.room001_LOD1.geometry}
					material={nodes.room001_LOD1.material}
					position={[-0.07, 0.51, -1.39]}
				/>
				<mesh
					name='vidrioEntorno'
					geometry={nodes.vidrioEntorno.geometry}
					material={nodes.vidrioEntorno.material}
					position={[-0.63, 0.67, -1.43]}
				/>
				<mesh
					name='vidrioCPU'
					geometry={nodes.vidrioCPU.geometry}
					material={nodes.vidrioCPU.material}
					position={[-0.63, 0.73, -1.46]}
				/>
				<mesh
					name='monitoInteractivo'
					geometry={nodes.monitoInteractivo.geometry}
					material={nodes.monitoInteractivo.material}
					position={[-1.2, 1.23, -1.37]}
				/>
				<mesh
					name='ledFrontal'
					geometry={nodes.ledFrontal.geometry}
					material={nodes.ledFrontal.material}
					position={[-0.62, 0.84, -1.21]}
				/>
				<mesh
					name='aroTrasero'
					geometry={nodes.aroTrasero.geometry}
					material={nodes.aroTrasero.material}
					position={[-0.55, 0.85, -1.67]}
				/>
				<mesh
					name='aroSuperior2'
					geometry={nodes.aroSuperior2.geometry}
					material={nodes.aroSuperior2.material}
					position={[-0.54, 0.96, -1.4]}
				/>
				<mesh
					name='aroSuperior1'
					geometry={nodes.aroSuperior1.geometry}
					material={nodes.aroSuperior1.material}
					position={[-0.54, 0.96, -1.54]}
				/>
				<mesh
					name='aroFrontal3'
					geometry={nodes.aroFrontal3.geometry}
					material={nodes.aroFrontal3.material}
					position={[-0.52, 0.58, -1.23]}
				/>
				<mesh
					name='aroFrontal2'
					geometry={nodes.aroFrontal2.geometry}
					material={nodes.aroFrontal2.material}
					position={[-0.52, 0.71, -1.23]}
				/>
				<mesh
					name='aroFrontal1'
					geometry={nodes.aroFrontal1.geometry}
					material={nodes.aroFrontal1.material}
					position={[-0.52, 0.84, -1.23]}
				/>
				<mesh
					name='luzTeclas'
					geometry={nodes.luzTeclas.geometry}
					material={nodes.luzTeclas.material}
					position={[-1.2, 0.96, -1.31]}
					rotation={[-Math.PI / 2, 0, -Math.PI]}
				/>
			</group>
		</group>
	)
}

useGLTF.preload('/screenmodel2.glb')