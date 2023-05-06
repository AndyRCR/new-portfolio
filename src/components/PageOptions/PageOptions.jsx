import { useContext, useEffect, useRef, useState } from 'react'
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import blackmenuicon from '../../assets/lotties/blackmenuicon.json'
import whitemenuicon from '../../assets/lotties/whitemenuicon.json'
import Lottie from 'lottie-react'
import './PageOptions.css'

const PageOptions = () => {
	const [firstInteraction, setFirstInteraction] = useState(false)
	const { theme, setClosedNavbar, closedNavbar } = useContext(ThemeContext)
	const lottieRef = useRef(null)

	const animation = () => {
		if (closedNavbar) {
			lottieRef.current.playSegments([71, 140], true)
		} else {
			lottieRef.current.playSegments([0, 70], true)
		}
	}

	const handleMenuClick = () => {
		animation()
		setFirstInteraction(true)
		setClosedNavbar(false)
	}

	useEffect(() => {
		if (!firstInteraction) return
		animation()
	}, [closedNavbar])

	useEffect(() => {
		lottieRef.current.stop()
	}, [theme])

	return (
		<div className={`page-options ${theme}`}>
			<div onClick={handleMenuClick} className='navbar-button mobile'>
				<Lottie
					lottieRef={lottieRef}
					loop={false}
					autoPlay={false}
					animationData={
						theme === 'dark' ? whitemenuicon : blackmenuicon
					}
				/>
			</div>
			<div className='separator mobile'></div>
			<LanguageSwitch theme={theme} />
			<div className='separator'></div>
			<ThemeSwitch />
		</div>
	)
}
export default PageOptions
