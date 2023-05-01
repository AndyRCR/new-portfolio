import { useContext, useEffect } from 'react'
import GSAP from 'gsap'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'
import './CatMessage.css'

const CatMessage = ({ language }) => {
	const setScrollTrigger = () => {
		GSAP.registerPlugin(ScrollTrigger)
		ScrollTrigger.matchMedia({
			'(min-width: 1001px)': () => {
				//Third Section
				const movieTimeLine = new GSAP.timeline({
					scrollTrigger: {
						scroller: '.page-wrapper',
						trigger: '.third-section',
						start: 'top top',
						end: `center center`,
						scrub: 0.6,
						invalidateOnRefresh: true,
					},
				})
				movieTimeLine.to('.cat-message', {
					opacity: 1,
				})
			},
		})
	}

	useEffect(() => {
		setScrollTrigger()
	}, [])

	return (
		<div className='cat-message message'>
			<div className='cat-message-container message-container'>
				Pssst, for contact him,
				<br />
				click here!
				<div className='cat-message-pick message-pick'></div>
			</div>
		</div>
	)
}

export default CatMessage
