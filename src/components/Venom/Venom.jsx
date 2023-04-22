import React from 'react'
import assets from '../../utils/assets'

const Venom = ({ nodes }) => {
	return (
		<React.Fragment>
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
		</React.Fragment>
	)
}
export default Venom
