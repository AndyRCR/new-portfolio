import React from 'react'
import assets from '../../utils/assets'
import { MeshBasicMaterial } from 'three'

const Glass = ({ nodes }) => {
	const glassMaterial = new MeshBasicMaterial({
		transparent: true,
		opacity: 0.4,
		color: 'black',
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
				material={glassMaterial}
				position={[-0.63, 0.73, -1.46]}
			/>
		</React.Fragment>
	)
}

export default Glass
