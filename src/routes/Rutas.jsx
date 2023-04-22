import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import HomeView from '../views/HomeView'

const Rutas = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomeView />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
export default Rutas
