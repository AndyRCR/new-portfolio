import { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeGlobalContext = ({ children }) => {
	const [theme, setTheme] = useState('light')
	const isDesktop =
		window.innerWidth >= 1024 &&
		!/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			navigator.userAgent
		)

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
				isDesktop,
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}
export default ThemeGlobalContext
