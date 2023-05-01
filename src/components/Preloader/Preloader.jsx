import { useContext, useEffect, useRef, useState } from 'react'
import Lottie from 'lottie-react'
import lighttransition from '../../assets/lotties/lighttransition.json'
import loaderhands from '../../assets/lotties/handsloader.json'
import GSAP from 'gsap'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import { ModelContext } from '../../context/ModelGlobalContext'
import './Preloader.css'

const Preloader = () => {
	const { theme } = useContext(ThemeContext)
	const { modelLoaded, quitIntro, setQuitIntro } = useContext(ModelContext)

	const lightlottie = useRef()
	const darklottie = useRef()
	const loaderlottie = useRef()

	const firstIntro = () => {
		GSAP.timeline()
			.to('.loader-lottie', {
				opacity: 0,
				delay: 2,
				onComplete: () => {
					document.querySelector('.loader-lottie').style.display =
						'none'
					loaderlottie.current.stop()
					document
						.querySelector('.loader-welcome-text')
						.classList.add('fade-in')
				},
			})
			.to('.preloader-arrow', {
				opacity: 1,
				delay: 1.5,
				duration: 1.5,
				onComplete: () => {
					window.addEventListener('wheel', secondIntro)
					window.addEventListener('touchmove', secondIntro)
				},
			})
	}

	const secondIntro = () => {
		if (!quitIntro) {
			document
				.querySelector('.loader-welcome-text')
				.classList.remove('fade-in')

			document
				.querySelector('.loader-welcome-text')
				.classList.add('fade-out')

			GSAP.timeline().to('.preloader-arrow', {
				opacity: 0,
				onComplete: () => {
					setTimeout(() => {
						lightlottie.current.play()
						setTimeout(() => {
							document.querySelector('.preloader').style.display =
								'none'
						}, 1500)
					}, 500)
				},
			})

			window.removeEventListener('wheel', secondIntro)
			window.removeEventListener('touchmove', secondIntro)
		}
		setQuitIntro(true)
	}

	useEffect(() => {
		if (lightlottie.current && !modelLoaded) {
			lightlottie.current.stop()
		}
	}, [lightlottie.current])

	useEffect(() => {
		if (modelLoaded) {
			firstIntro()
		}
	}, [modelLoaded])

	return (
		<div className='preloader'>
			<Lottie
				rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
				className='backgroundlottie'
				lottieRef={lightlottie}
				loop={false}
				autoPlay={false}
				animationData={lighttransition}
				onLoopComplete={() => lightlottie.current.pause()}
			/>
			<div className='preloader-container'>
				<div className='loader-lottie'>
					<Lottie
						lottieRef={loaderlottie}
						loop={true}
						autoPlay={true}
						animationData={loaderhands}
					/>
					<div className='loader-lottie-text'>
						Loading models and heavy assets 🥴
					</div>
				</div>
				<div className='loader-welcome-text'>
					Welcome to my portfolio
				</div>
			</div>

			<div className='preloader-arrow'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					height='48'
					viewBox='0 96 960 960'
					width='48'
				>
					<path d='M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z' />
				</svg>
			</div>
		</div>
	)
}
export default Preloader
