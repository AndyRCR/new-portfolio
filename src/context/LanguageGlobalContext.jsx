import { createContext, useState } from 'react'

export const LanguageContext = createContext()

const LanguageGlobalContext = ({ children }) => {
	const [language, setLanguage] = useState('en')

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	)
}

export default LanguageGlobalContext
