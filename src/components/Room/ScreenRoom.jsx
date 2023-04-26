import { useContext, useEffect, useRef } from 'react'
import { ThemeContext } from '../../context/ThemeGlobalContext'
import { gsap } from 'gsap'
import assets from '../../utils/assets'

const ScreenRoom = ({ nodes }) => {
	const { theme, setTheme } = useContext(ThemeContext)

	const group = useRef()

	const updateUniform = () => {
		group.current.children.forEach((child) => {
			gsap.to(child.material.uniforms?.uNightMix, {
				duration: 0.3,
				value: theme === 'light' ? 0 : 10,
				onInterrupt: () =>
					setTheme(theme === 'light' ? 'dark' : 'light'),
			})
		})
	}

	useEffect(() => {
		if (group.current) {
			updateUniform()
		}
	}, [theme])

	return (
		<group name='Room' ref={group}>
			<mesh
				name='room001_LOD1'
				geometry={nodes.room001_LOD1.geometry}
				material={assets.textures.screenBakedTexture}
				position={[-0.07, 0.51, -1.39]}
			/>
		</group>
	)
}
export default ScreenRoom
