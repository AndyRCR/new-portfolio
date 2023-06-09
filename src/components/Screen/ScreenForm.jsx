import React, { useContext, useEffect, useRef, useState } from 'react'
import { Html } from '@react-three/drei'
import { MeshBasicMaterial, Box3 } from 'three'
import ContactForm from '../ContactForm/ContactForm'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import { LanguageContext } from '../../context/LanguageGlobalContext'
import { useFrame } from '@react-three/fiber'

const ScreenForm = ({ nodes, display }) => {
	const { theme } = useContext(ThemeContext)
	const { language } = useContext(LanguageContext)

	return (
		<React.Fragment>
			<mesh
				name='monitoInteractivo'
				scale={[1.008, 1.008, 1]}
				geometry={nodes.monitoInteractivo.geometry}
				material={nodes.monitoInteractivo.material}
				position={[-1.2, 1.23, -1.37]}
			/>
			<Html
				rotation-y={2 * Math.PI}
				distanceFactor={0.4}
				position={[-1.2, 1.23, -1.37 + 0.001]}
				transform
				occlude
			>
				<ContactForm
					display={display}
					theme={theme}
					language={language}
				/>
			</Html>
		</React.Fragment>
	)
}
export default ScreenForm
