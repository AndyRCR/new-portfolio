import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeView from '../views/HomeView'
import ContactView from '../views/ContactView'
import Layout from '../components/Layout'
import AboutView from '../views/AboutView'
import SkillsView from '../views/SkillsView'
import ProjectsView from '../views/ProjectsView'

const Rutas = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomeView />} />
					<Route exact path='/about' element={<AboutView />} />
					<Route exact path='/skills' element={<SkillsView />} />
					<Route exact path='/projects' element={<ProjectsView />} />
					<Route exact path='/contact' element={<ContactView />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
export default Rutas
