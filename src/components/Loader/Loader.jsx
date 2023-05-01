import { useContext, useEffect, useRef, useState } from 'react'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import Lottie from 'lottie-react'
import GSAP from 'gsap'
import lighttransition from '../../assets/lotties/lighttransition.json'
import darktransition from '../../assets/lotties/darktransition.json'
import lightloaderpoints from '../../assets/lotties/loaderpoints.json'
import darkloaderpoints from '../../assets/lotties/loaderpointslight.json'
import { ModelContext } from '../../context/ModelGlobalContext'
import { LanguageContext } from '../../context/LanguageGlobalContext'
import './Loader.css'

const Loader = () => {
	const { theme } = useContext(ThemeContext)
	const { language } = useContext(LanguageContext)
	const { needLoader, setNeedLoader, modelLoaded, setModelLoaded } =
		useContext(ModelContext)
	const bglottie = useRef()

	const open = () => {
		bglottie.current.setDirection(1)
		GSAP.to('.page-loader-container', {
			opacity: 0,
			duration: 1.2,
			onComplete: () => {
				bglottie.current.goToAndPlay(0, true)
				setTimeout(() => {
					setNeedLoader(false)
				}, 1200)
			},
		})
	}

	const close = () => {
		bglottie.current.setDirection(-1)
		bglottie.current.goToAndPlay(61, true)
		GSAP.to('.page-loader-container', {
			opacity: 1,
			duration: 1.2,
			delay: 1.8,
		})
	}

	useEffect(() => {
		if (bglottie.current) {
			bglottie.current.stop()
		}
	}, [bglottie.current])

	useEffect(() => {
		if (modelLoaded) {
			setTimeout(open, 1000)
		}
	}, [modelLoaded])

	useEffect(() => {
		close()
	}, [])

	return (
		<div className={`page-loader ${theme}`}>
			<div className='page-loader-container'>
				<Lottie
					style={{
						width: '400px',
					}}
					loop={true}
					autoPlay={true}
					animationData={
						theme === 'light' ? lightloaderpoints : darkloaderpoints
					}
				/>
				<div className='page-loader-text'>
					{language === 'en'
						? 'Andy is finishing programming this section'
						: 'Andy está terminando de programar esta sección'}
				</div>
			</div>
			<Lottie
				rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
				className='backgroundlottie'
				lottieRef={bglottie}
				loop={false}
				autoPlay={false}
				animationData={
					theme === 'light' ? lighttransition : darktransition
				}
				onLoopComplete={() => bglottie.current.pause()}
			/>
		</div>
	)
}
export default Loader
