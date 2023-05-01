import TagCloud from 'TagCloud'
import { useEffect } from 'react'
import './TextSphere.css'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeGlobalContext'

const radiusValue = () => {
	let radii
	if (window.innerWidth <= 1000) {
		radii = 200
	} else {
		radii = 220
	}
	return radii
}

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

const TextSphere = ({ radius }) => {
	const { theme } = useContext(ThemeContext)

	useEffect(() => {
		const tagCloud = TagCloud(container, texts, {
			radius: radius || radiusValue(),
			maxSpeed: 'fast',
			initSpeed: 'fast',
			keep: false,
		})

		return () => {
			tagCloud.destroy()
		}
	}, [])

	return (
		<div className={`text-sphere ${theme}`}>
			<span className='tagcloud'></span>
		</div>
	)
}
export default TextSphere
