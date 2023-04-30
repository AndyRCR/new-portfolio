import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import PageOptions from './PageOptions/PageOptions'
import Preloader from './Preloader/Preloader'

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
	return (
		<React.Fragment>
			<Preloader />
			<PageOptions />
			<main style={styles.mainContainer} className='main-container'>
				<Navbar />
				<Outlet />
			</main>
		</React.Fragment>
	)
}

export default Layout
