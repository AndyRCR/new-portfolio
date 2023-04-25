import { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeGlobalContext = ({ children }) => {
	const [theme, setTheme] = useState('light')
	const [modelLoaded, setModelLoaded] = useState(false)

	return (
		<ThemeContext.Provider
			value={{ theme, setTheme, modelLoaded, setModelLoaded }}
		>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeGlobalContext
