import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import PageOptions from './PageOptions/PageOptions'
import Preloader from './Preloader/Preloader'
import Loader from './Loader/Loader'
import { ModelContext } from '../context/ModelGlobalContext'
import ProjectModal from './ProjectModal/ProjectModal'

const Layout = () => {
	const { quitIntro, needLoader } = useContext(ModelContext)

	return (
		<React.Fragment>
			<Preloader />
			<PageOptions />
			<ProjectModal />
			<main className='main-container'>
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
