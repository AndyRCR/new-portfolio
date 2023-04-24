import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import HomeView from '../views/HomeView'

const Rutas = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomeView />} />
				</Route>
				<Route path='/theme' element={<h1>Theme</h1>} />
			</Routes>
		</BrowserRouter>
	)
}
export default Rutas
