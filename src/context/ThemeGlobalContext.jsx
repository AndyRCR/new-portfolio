import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

const ThemeGlobalContext = ({ children }) => {
	const [isDesktop, setIsDesktop] = useState(
		!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
	)
	const [theme, setTheme] = useState('light')
	const [closedNavbar, setClosedNavbar] = useState(window.innerWidth <= 1250)

	const handleMenu = () => {
		if (window.innerWidth >= 1250) {
			setClosedNavbar(false)
		} else {
			setClosedNavbar(true)
		}
	}

	useEffect(() => {
		window.addEventListener('resize', handleMenu)
		return () => window.removeEventListener('resize', handleMenu)
	}, [])

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
				closedNavbar,
				setClosedNavbar,
				isDesktop,
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeGlobalContext
