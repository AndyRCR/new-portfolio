import React from 'react'
import assets from '../../utils/assets'

const Screen = ({ nodes }) => {
	return (
		<mesh
			name='monitorInteractivo'
			geometry={nodes.monitorInteractivo.geometry}
			material={assets.video.videoBlender}
			position={[-1.18, 1.076, -1.37]}
		/>
	)
}

export default Screen
