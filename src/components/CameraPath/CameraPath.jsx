import {
	OrbitControls,
	OrthographicCamera,
	PerspectiveCamera,
} from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'

const CameraPath = () => {
	const cameraRef = useRef()

	useEffect(() => {
		if (cameraRef.current) {
			cameraRef.current.lookAt(0, 0, 0)
		}
	}, [])

	return (
		<React.Fragment>
			{/* <OrbitControls /> */}
			<axesHelper args={[5]} />
			{/* <PerspectiveCamera
				makeDefault
				ref={cameraRef}
				resolution={[window.innerWidth, window.innerHeight]}
				near={0.1}
				far={1000}
				position={[0, 1.5, 3]}
			/> */}
			{/* <OrthographicCamera
				makeDefault={true}
				ref={cameraRef}
				left={-2}
				right={2}
				top={2}
				bottom={-2}
				near={-50}
				far={50}
				zoom={1.5}
				rotation={[-Math.PI / 6, 0, 0]}
				position={[0, 2, 3]}
			/> */}
		</React.Fragment>
	)
}

export default CameraPath
