import { Canvas } from '@react-three/fiber'
import { OrbitControls, OrthographicCamera, Plane } from '@react-three/drei'
import * as THREE from 'three'
import Room from './components/Room/Room'
import './App.css'
import ThemeGlobalContext from './context/ThemeGlobalContext'
import Rutas from './routes/Rutas'

function App() {
	return (
		<ThemeGlobalContext>
			<Rutas />
		</ThemeGlobalContext>
	)
}

export default App
