import { createContext, useState } from 'react'

export const ModelContext = createContext()

const ModelGlobalContext = ({ children }) => {
	const [modelLoaded, setModelLoaded] = useState(false)
	const [quitIntro, setQuitIntro] = useState(false)

	return (
		<ModelContext.Provider
			value={{ modelLoaded, setModelLoaded, quitIntro, setQuitIntro }}
		>
			{children}
		</ModelContext.Provider>
	)
}

export default ModelGlobalContext
