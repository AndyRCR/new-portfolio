import React from 'react'
import assets from '../../utils/assets'

const Chair = ({ nodes }) => {
	return (
		<React.Fragment>
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
		</React.Fragment>
	)
}

export default Chair
