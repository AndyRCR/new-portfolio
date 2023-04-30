import ThemeGlobalContext from './context/ThemeGlobalContext'
import AudioGlobalContext from './context/AudioGlobalContext'
import ModelGlobalContext from './context/ModelGlobalContext'
import Rutas from './routes/Rutas'
import './App.css'
import LanguageGlobalContext from './context/LanguageGlobalContext'

function App() {
	return (
		<ThemeGlobalContext>
			<LanguageGlobalContext>
				<ModelGlobalContext>
					<AudioGlobalContext>
						<Rutas />
					</AudioGlobalContext>
				</ModelGlobalContext>
			</LanguageGlobalContext>
		</ThemeGlobalContext>
	)
}

export default App
