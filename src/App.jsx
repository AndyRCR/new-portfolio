import ThemeGlobalContext from './context/ThemeGlobalContext'
import AudioGlobalContext from './context/AudioGlobalContext'
import Rutas from './routes/Rutas'
import './App.css'

function App() {
	return (
		<ThemeGlobalContext>
			<AudioGlobalContext>
				<Rutas />
			</AudioGlobalContext>
		</ThemeGlobalContext>
	)
}

export default App
