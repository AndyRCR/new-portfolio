import { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeGlobalContext = ({ children }) => {
	const getScreenFlag = () =>
		window.innerWidth > 1250 &&
		!/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		)

	const [theme, setTheme] = useState('light')
	const isDesktop = getScreenFlag()

	const [closedNavbar, setClosedNavbar] = useState(!isDesktop)

	window.addEventListener('resize', () => {
		setClosedNavbar(!getScreenFlag())
	})

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
				isDesktop,
				closedNavbar,
				setClosedNavbar,
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}
export default ThemeGlobalContext
