import React from 'react'
import assets from '../../utils/assets'
import { MeshBasicMaterial, DoubleSide } from 'three'

const ScreenGlass = ({ nodes }) => {
	const glassMaterial = new MeshBasicMaterial({
		transparent: true,
		opacity: 0.4,
		color: 'black',
	})

	const opaqueGlassMaterial = new MeshBasicMaterial({
		transparent: true,
		opacity: 0.4,
		color: 'black',
		side: DoubleSide,
	})

	return (
		<React.Fragment>
			<mesh
				name='vidrioEntorno'
				geometry={nodes.vidrioEntorno.geometry}
				material={glassMaterial}
				position={[-0.63, 0.67, -1.43]}
			/>
			<mesh
				name='vidrioCPU'
				geometry={nodes.vidrioCPU.geometry}
				material={opaqueGlassMaterial}
				position={[-0.63, 0.73, -1.46]}
			/>
		</React.Fragment>
	)
}
export default ScreenGlass
