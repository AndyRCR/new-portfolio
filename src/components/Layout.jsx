import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import PageOptions from './PageOptions/PageOptions'
import Preloader from './Preloader/Preloader'
import Loader from './Loader/Loader'
import { ModelContext } from '../context/ModelGlobalContext'

const styles = {
	mainContainer: {
		position: 'relative',
		width: '100vw',
		height: '100vh',
		display: 'flex',
		overflow: 'hidden',
	},
}

const Layout = () => {
	const { quitIntro, needLoader } = useContext(ModelContext)

	return (
		<React.Fragment>
			<Preloader />
			<PageOptions />
			<main style={styles.mainContainer} className='main-container'>
				<Navbar />
				<div className='view-container'>
					{needLoader ? <Loader /> : false}
					<Outlet />
				</div>
			</main>
		</React.Fragment>
	)
}

export default Layout
