import { motion, useAnimationControls } from 'framer-motion'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import { ModelContext } from '../../context/ModelGlobalContext'
import { LanguageContext } from '../../context/LanguageGlobalContext'
import './RubberText.css'

const SpanText = ({ children }) => {
	const controls = useAnimationControls()

	const [isPlaying, setIsPlaying] = useState(false)

	const rubberBand = () => {
		controls.start({
			transform: [
				'scale(1,1)',
				'scale(1.5625,0.5625)',
				'scale(0.5625,1.5625)',
				'scale(1.3225,0.7725)',
				'scale(0.9025,1.1025)',
				'scale(1.1025,0.9025)',
				'scale(1,1)',
			],
			transition: {
				duration: 1.2,
				times: [0, 0.3, 0.4, 0.5, 0.65, 0.75, 1],
			},
		})
		setIsPlaying(true)
	}

	return (
		<motion.span
			animate={controls}
			onMouseOver={() => {
				if (!isPlaying) rubberBand()
			}}
			onAnimationComplete={() => setIsPlaying(false)}
		>
			{children}
		</motion.span>
	)
}

const RubberText = ({ children }) => {
	const { theme } = useContext(ThemeContext)
	const { quitIntro } = useContext(ModelContext)
	const { language } = useContext(LanguageContext)

	const bounceEffect = () => {
		const spans = document.querySelectorAll('.rubber-text span')
		let t = 0
		spans.forEach((span) => {
			const timeout = setTimeout(() => {
				span.classList.add('bounceIn')
				const timeout2 = setTimeout(() => {
					span.classList.remove('bounceIn')
					span.style.opacity = '1'
				}, 740)
			}, t)
			t += 50
		})
	}

	const restartLetters = () => {
		const spans = document.querySelectorAll('.rubber-text span')
		spans.forEach((span) => {
			span.style.opacity = '0'
		})
		setTimeout(bounceEffect, 200)
	}

	useEffect(() => {
		if (quitIntro) {
			setTimeout(bounceEffect, 1200)
		}
	}, [quitIntro])

	useEffect(() => {
		if (quitIntro) {
			restartLetters()
		}
	}, [language])

	return (
		<div className={`rubber-text ${theme}`}>
			{children.split('').map((letter, i) => {
				return (
					<SpanText key={`letter ${i}`}>
						{letter === ' ' ? '\u00A0' : letter}
					</SpanText>
				)
			})}
		</div>
	)
}
export default RubberText
