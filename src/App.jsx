import ThemeGlobalContext from './context/ThemeGlobalContext'
import AudioGlobalContext from './context/AudioGlobalContext'
import ModelGlobalContext from './context/ModelGlobalContext'
import LanguageGlobalContext from './context/LanguageGlobalContext'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Rutas from './routes/Rutas'
import './App.css'
import ProjectGlobalContext from './context/ProjectGlobalContext'

function App() {
	return (
		<ThemeGlobalContext>
			<LanguageGlobalContext>
				<ModelGlobalContext>
					<AudioGlobalContext>
						<ProjectGlobalContext>
							<Rutas />
						</ProjectGlobalContext>
					</AudioGlobalContext>
				</ModelGlobalContext>
			</LanguageGlobalContext>
		</ThemeGlobalContext>
	)
}

export default App
