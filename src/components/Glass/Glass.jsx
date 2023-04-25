import React from 'react'
import assets from '../../utils/assets'
import { MeshBasicMaterial, DoubleSide } from 'three'

const Glass = ({ nodes }) => {
	const glassMaterial = new MeshBasicMaterial({
		transparent: true,
		opacity: 0.4,
		color: 'black',
	})

	const opaqueGlassMaterial = new MeshBasicMaterial({
		transparent: true,
		opacity: 0.2,
		color: 'black',
		side: DoubleSide,
	})

	return (
		<React.Fragment>
			<mesh
				name='vidrioEntorno'
				geometry={nodes.vidrioEntorno.geometry}
				material={glassMaterial}
				position={[-1.86, 1.81, 0.09]}
			/>
			<mesh
				name='vidrioCPU'
				geometry={nodes.vidrioCPU.geometry}
				material={opaqueGlassMaterial}
				position={[-0.529, 0.98, -1.483]}
			/>
		</React.Fragment>
	)
}

export default Glass
