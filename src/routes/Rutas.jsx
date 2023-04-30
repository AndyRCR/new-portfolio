import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeView from '../views/HomeView'
import ContactView from '../views/ContactView'
import Layout from '../components/Layout'

const Rutas = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomeView />} />
					<Route path='/contact' element={<ContactView />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
export default Rutas
