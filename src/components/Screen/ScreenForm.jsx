import { Html } from '@react-three/drei'
import { MeshBasicMaterial, Box3 } from 'three'
import ContactForm from '../ContactForm/ContactForm'

const ScreenForm = ({ nodes, screenObject }) => {
	return (
		<mesh
			name='monitoInteractivo'
			geometry={nodes.monitoInteractivo.geometry}
			material={nodes.monitoInteractivo.material}
			position={[-1.2, 1.23, -1.37]}
		>
			<Html
				rotation-y={2 * Math.PI}
				distanceFactor={0.4}
				position={[0, 0, 0.001]}
				transform
				occlude
			>
				<ContactForm />
			</Html>
		</mesh>
	)
}
export default ScreenForm
