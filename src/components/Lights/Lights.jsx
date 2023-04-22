import React from 'react'
import assets from '../../utils/assets'

const Lights = ({ nodes }) => {
	return (
		<React.Fragment>
			<mesh
				name='ledFrontal'
				geometry={nodes.ledFrontal.geometry}
				material={assets.shaders.redLight}
				// position={[-0.62, 0.8, -1.2098]}
				position={[-0.62, 0.84, -1.2098]}
			/>
			<mesh
				name='luzTeclas'
				geometry={nodes.luzTeclas.geometry}
				material={assets.shaders.redLight}
				// position={[-1.205, 0.935, -1.298]}
				position={[-1.2, 0.96, -1.31]}
				rotation={[-Math.PI / 2, 0, -Math.PI]}
			/>
			<mesh
				name='aroTrasero'
				geometry={nodes.aroTrasero.geometry}
				material={assets.shaders.rgbLight}
				position={[-0.55, 0.85, -1.67]}
			/>
			<mesh
				name='aroSuperior2'
				geometry={nodes.aroSuperior2.geometry}
				material={assets.shaders.rgbLight}
				position={[-0.54, 0.96, -1.4]}
			/>
			<mesh
				name='aroSuperior1'
				geometry={nodes.aroSuperior1.geometry}
				material={assets.shaders.rgbLight}
				position={[-0.54, 0.96, -1.54]}
			/>
			<mesh
				name='aroFrontal3'
				geometry={nodes.aroFrontal3.geometry}
				material={assets.shaders.rgbLight}
				position={[-0.52, 0.58, -1.23]}
			/>
			<mesh
				name='aroFrontal2'
				geometry={nodes.aroFrontal2.geometry}
				material={assets.shaders.rgbLight}
				position={[-0.52, 0.71, -1.23]}
			/>
			<mesh
				name='aroFrontal1'
				geometry={nodes.aroFrontal1.geometry}
				material={assets.shaders.rgbLight}
				position={[-0.52, 0.84, -1.23]}
			/>
		</React.Fragment>
	)
}

export default Lights
