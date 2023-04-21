import Room from './components/Room'
import { OrbitControls, OrthographicCamera, Plane } from '@react-three/drei'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import './App.css'

function App() {
	return (
		<div className='App'>
			<Canvas
				orthographic
				camera={{
					position: [0, 1.5, 3],
					left: -2,
					right: 2,
					top: 2,
					bottom: -2,
					far: 20,
					zoom: 220,
				}}
				onCreated={({ gl }) =>
					gl.setSize(window.innerWidth, window.innerHeight)
				}
				gl={{
					antialias: true,
					toneMapping: THREE.NoToneMapping,
					outputEncoding: THREE.sRGBEncoding,
					pixelRatio: window.devicePixelRatio,
				}}
				shadows
			>
				<directionalLight
					color={'#ffffff'}
					position={[-1, 3, -3.5]}
					intensity={1.5}
					shadow-mapSize-width={2048}
					shadow-mapSize-height={2048}
					castShadow
				/>
				<Room />
				<Plane
					receiveShadow
					rotation={[-Math.PI / 2, 0, 0]}
					position={[0, -0.05, 0]}
					args={[10, 10]}
				>
					<meshLambertMaterial reflectivity={0} color='#0A0E48' />
				</Plane>
			</Canvas>
		</div>
	)
}

export default App
