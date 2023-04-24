import React from 'react'
import { Outlet } from 'react-router-dom'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'
import Navbar from '../Navbar/Navbar'
import './Layout.css'

const Layout = () => {
	return (
		<React.Fragment>
			<ThemeSwitch />
			<main className='main-container'>
				<Navbar />
				<Outlet />
			</main>
		</React.Fragment>
	)
}

export default Layout
