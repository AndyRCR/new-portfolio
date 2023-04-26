import { createContext, useState } from 'react'
import { OrthographicCamera, PerspectiveCamera } from 'three'

export const CameraContext = createContext()

const CameraGlobalContext = ({ children }) => {
	const [isOrthographicCamera, setIsOrthographicCamera] = useState(true)

	return (
		<CameraContext.Provider
			value={{
				isOrthographicCamera,
				setIsOrthographicCamera,
			}}
		>
			{children}
		</CameraContext.Provider>
	)
}

export default CameraGlobalContext
