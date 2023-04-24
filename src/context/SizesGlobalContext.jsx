import { createContext, useEffect, useState } from 'react'
import { EventEmitter } from 'events'

export const SizesContext = createContext()

const SizesGlobalContext = ({ children }) => {
	const [width, setWidth] = useState(window.innerWidth)
	const [height, setHeight] = useState(window.innerHeight)
	const [aspect, setAspect] = useState(width / height)
	const [pixelRatio, setPixelRatio] = useState(
		Math.min(window.devicePixelRatio, 2)
	)
	const [frustrum, setFrustrum] = useState(5)
	const [device, setDevice] = useState(() => {
		if (width < 968) {
			return 'mobile'
		} else {
			return 'desktop'
		}
	})

	// window.addEventListener('resize', () => {
	// 	setWidth(window.innerWidth)
	// 	setHeight(window.innerHeight)
	// 	setAspect(window.innerWidth / window.innerHeight)
	// 	setPixelRatio(Math.min(window.devicePixelRatio, 2))
	// 	if (width < 968 && device !== 'mobile') {
	// 		setDevice('mobile')
	// 	} else if (width >= 968 && device !== 'desktop') {
	// 		setDevice('desktop')
	// 	}
	// })

	return (
		<SizesContext.Provider
			value={{ width, height, aspect, pixelRatio, frustrum, device }}
		>
			{children}
		</SizesContext.Provider>
	)
}
export default SizesGlobalContext
