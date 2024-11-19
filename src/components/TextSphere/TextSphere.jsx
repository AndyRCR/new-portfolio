import TagCloud from 'TagCloud'
import { useEffect, useRef } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import './TextSphere.css'

const container = '.tagcloud'

const texts = [
	'JavaScript',
	'Next',
	'React',
	'HTML',
	'Blender',
	'Node',
	'Express',
	'Git',
	'Firebase',
	'AWS',
	'Three.js',
	'MongoDB',
	'MySQL',
	'Java',
]

const TextSphere = () => {
	const { theme } = useContext(ThemeContext)
	const sphere = useRef()

	const handleResizeSphere = () => {
		let tagCloud
		if (window.innerWidth <= 550) {
			sphere.current.destroy()

			tagCloud = TagCloud(container, texts, {
				radius: 160,
				maxSpeed: 'fast',
				initSpeed: 'fast',
				keep: false,
			})
		} else {
			sphere.current.destroy()

			tagCloud = TagCloud(container, texts, {
				radius: 220,
				maxSpeed: 'fast',
				initSpeed: 'fast',
				keep: false,
			})
		}
		sphere.current = tagCloud
	}

	useEffect(() => {
		window.addEventListener('resize', handleResizeSphere)

		const tagCloud = TagCloud(container, texts, {
			radius: window.innerWidth <= 550 ? 160 : 220,
			maxSpeed: 'fast',
			initSpeed: 'fast',
			keep: false,
		})
		sphere.current = tagCloud

		return () => {
			window.removeEventListener('resize', handleResizeSphere)
			sphere.current.destroy()
		}
	}, [])

	return (
		<div className={`text-sphere ${theme}`}>
			<span className='tagcloud'></span>
		</div>
	)
}
export default TextSphere
