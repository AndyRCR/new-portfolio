import { Canvas } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera, Plane } from '@react-three/drei'
import * as THREE from 'three'
import Room from './components/Room/Room'
import './App.css'
import ThemeGlobalContext from './context/ThemeGlobalContext'
import Rutas from './routes/Rutas'
import AudioGlobalContext from './context/AudioGlobalContext'
import SizesGlobalContext from './context/SizesGlobalContext'
import CameraGlobalContext from './context/CameraGlobalContext'

function App() {
	return (
		<CameraGlobalContext>
			<ThemeGlobalContext>
				<AudioGlobalContext>
					<Rutas />
				</AudioGlobalContext>
			</ThemeGlobalContext>
		</CameraGlobalContext>
	)
}

export default App
